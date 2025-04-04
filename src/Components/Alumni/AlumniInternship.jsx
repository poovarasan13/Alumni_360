import React, { useContext, useEffect, useState } from "react";
import AlumniContext from "../../Context/Alumni";

const AlumniInternship = () => {
  const [internships, setInternships] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [link,setLink]=useState('');
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);
 const {alumniData}=useContext(AlumniContext);
 const rollno=alumniData.rollno;
  // Fetch Internships
  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await fetch(`http://localhost:9000/internships/list/${rollno}`);
      const data = await response.json();
      setInternships(data);
    } catch (error) {
      console.error("Error fetching internships:", error);
    }
  };

  // Handle Submit (Add/Update)
  const handleSubmit = async () => {
    if (!name || !company || !duration || !description || (!editId && !image)) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("company", company);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("rollno",rollno);
    formData.append("link",link)
        if (image) formData.append("image", image);

    const url = editId
      ? `http://localhost:9000/internships/update/${editId}`
      : "http://localhost:9000/internships/create";
    const method = editId ? "PUT" : "POST";

    try {
      const response = await fetch(url, { method, body: formData });
      const data = await response.json();

      if (response.ok) {
        setInternships(
          editId
            ? internships.map((internship) =>
                internship._id === editId ? data.internship : internship
              )
            : [...internships, data.internship]
        );
        resetForm();
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this internship?")) return;

    try {
      const response = await fetch(`http://localhost:9000/internships/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setInternships(internships.filter((internship) => internship._id !== id));
      } else {
        alert("Failed to delete internship.");
      }
    } catch (error) {
      console.error("Error deleting internship:", error);
    }
  };

  // Handle Edit
  const handleEdit = (internship) => {
    setName(internship.name);
    setCompany(internship.company);
    setDuration(internship.duration);
    setDescription(internship.description);
    setEditId(internship._id);
    setLink(internship.link);
    setImage(null);
    document.getElementById("openModalBtn").click(); // Open modal for editing
  };

  // Reset Form
  const resetForm = () => {
    setName("");
    setCompany("");
    setDuration("");
    setDescription("");
    setEditId(null);
    setImage(null);
    setLink('');
    document.getElementById("closeModal").click(); // Close modal after submit
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-2">
        <button
        id="openModalBtn"
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#internshipModal"
      >
        Add Internship
      </button>
        </div>
      </div>


      {/* Bootstrap Modal for Add/Edit */}
      <div className="modal fade" id="internshipModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editId ? "Edit Internship" : "Add Internship"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Internship Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="file"
                className="form-control mb-2"
                onChange={(e) => setImage(e.target.files[0])}
              />
               <input
                type="text"
                className="form-control mb-2"
                placeholder="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button type="button" id="closeModal" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={handleSubmit}>
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Cards */}
      <div className="row">
        {internships.map((internship) => (
          <div className="col-md-4 mb-3" key={internship._id}>
            <div className="card" style={{width:"17rem"}}>
              <img
                src={`http://localhost:9000${internship.image}`}
                className="card-img-top"
                style={{ height: "180px" }}
                alt="Internship"
              />
              <div className="card-body">
                <h5 className="card-title">{internship.name}</h5>
                <p className="card-text">{internship.company} - {internship.duration}</p>
                <p className="card-text">{internship.description}</p>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(internship)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(internship._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniInternship;
