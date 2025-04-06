import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PostComment from "./PostComment";
import "../../assets/style/PostCard.css";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [forum, setForum] = useState(null);
  const [comment, setComment] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login
  const [userName, setUserName] = useState("Guest");
  const [userImage, setUserImage] = useState("https://i.ibb.co/album/default-user.png");

  useEffect(() => {
    axios
      .get(`http://localhost:9000/forums/${id}`)
      .then((res) => setForum(res.data))
      .catch((err) => console.error("Error fetching forum post:", err));
  }, [id]);

  const handleAddComment = () => {
    const newComment = {
      pName: userName,
      pComment: comment,
      pImage: userImage,
    };

    axios
      .post(`http://localhost:9000/forums/${id}/comments`, newComment)
      .then((res) => {
        setForum(res.data);
        setComment("");
      })
      .catch((err) => console.error("Error adding comment:", err));
  };

  if (!forum) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row ms-4 py-3">
        <div className="col-9">
          <div className="card rounded-4">
            <div className="card-body">
              <div className="row justify-content-start">
                <div className="col-1">
                  <i
                    className="bi bi-arrow-left-circle"
                    style={{ fontSize: "2rem", cursor: "pointer" }}
                    onClick={() => navigate(-1)}
                  ></i>
                </div>
                <div className="col-1 rounded">
                  <img src={forum.avatar || forum.image} alt="author" className="pro" />
                </div>
                <div className="col-2 pt-2">
                  <div className="name h5">{forum.name}</div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <div className="text-start h5 fw-bold">{forum.content}</div>
                </div>
              </div>

              {forum.para && (
                <div className="row">
                  <div className="col">
                    <div className="text text-start fw-light">{forum.para}</div>
                  </div>
                </div>
              )}

              {forum.imgPost && (
                <div className="row">
                  <div className="col">
                  <img src={`http://localhost:9000/uploads/${forum.imgPost}`} alt="post" className="postt rounded-3" />
                  </div>
                </div>
              )}

              <div className="row mt-3">
                <div className="col-1 text-end">
                  <i className="bi bi-share-fill"></i>
                </div>
                <div className="col-1 text">
                  <i className="bi bi-chat-left"></i>
                </div>
              </div>

              <div className="row mt-4">
                {isLoggedIn ? (
                  <div className="col-2">
                    <div className="btn btn-sm btn-primary rounded-4">
                      <div className="text">Add Comment</div>
                    </div>
                  </div>
                ) : (
                  <div className="col">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleAddComment();
                      }}
                    >
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control border-2"
                          placeholder="Write your comment here..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </div>
                      <div className="row justify-content-start">
                        <div className="col-1">
                          <button className="btn btn-sm btn-primary" type="submit">
                            Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="mt-4">
                {forum.comments.map((c, i) => (
                  <PostComment key={i} {...c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
