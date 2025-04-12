import React, { useEffect, useState, useContext } from "react";
import AlumniContext from "../../Context/Alumni";

const AlumniPost = () => {
  const [posts, setPosts] = useState([]);
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [editId, setEditId] = useState(null);
  const { alumniData } = useContext(AlumniContext);
  const token = localStorage.getItem("token"); // Fetch token from localStorage
  const rollno = alumniData?.rollno;
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    if (!rollno) {
      setAuthError(true);
      return;
    }

    fetch(`http://localhost:9000/posts/list/${rollno}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    })
      .then((response) => {
        if (!response.ok) {
          setAuthError(true);
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, [rollno, token]); // Re-fetch when token changes

  const handleSubmitPost = async () => {
    if (!postName || !postDescription || (!editId && !postImage)) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("rollno", rollno);
    formData.append("name", postName);
    formData.append("description", postDescription);
    if (postImage) formData.append("image", postImage);

    const url = editId
      ? `http://localhost:9000/posts/update/${editId}`
      : "http://localhost:9000/posts/create";
    const method = editId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in headers for authentication
        },
      });
      const data = await response.json();

      if (response.ok) {
        setPosts(
          editId
            ? posts.map((post) => (post._id === editId ? data.post : post))
            : [...posts, data.post]
        );
        resetForm();
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`http://localhost:9000/posts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in headers for authentication
        },
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post._id !== id));
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to delete post.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (post) => {
    setPostName(post.name);
    setPostDescription(post.description);
    setEditId(post._id);
    setPostImage(null);
  };

  const resetForm = () => {
    setPostName("");
    setPostDescription("");
    setPostImage(null);
    setEditId(null);
    document.getElementById("closeModal").click();
  };

  if (authError) {
    return <div>You are not authorized to access this page. Please log in.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-2">
          <button
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#createPostModal"
          >
            Create Post
          </button>
        </div>
      </div>

      <div className="row mt-4">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post._id}>
            <div className="card text-center">
              <img
                src={`http://localhost:9000${post.image}`}
                alt={post.name}
                className="img-fluid"
                style={{ height: "180px", width: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">{post.description}</p>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(post)}
                  data-bs-toggle="modal"
                  data-bs-target="#createPostModal"
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="modal fade" id="createPostModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editId ? "Edit Post" : "Create Post"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" id="closeModal"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Post Name"
                value={postName}
                onChange={(e) => setPostName(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Description"
                value={postDescription}
                onChange={(e) => setPostDescription(e.target.value)}
              />
              <input
                type="file"
                className="form-control mb-2"
                accept="image/*"
                onChange={(e) => setPostImage(e.target.files[0])}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-sm" onClick={handleSubmitPost}>
                {editId ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPost;
