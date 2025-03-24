import React, { useContext, useEffect, useState } from "react";
import AlumniContext from "../../Context/Alumni";

const AlumniWebinar = () => {
  const [webinarData, setWebinarData] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [eventTime, setEventTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const { alumniData } = useContext(AlumniContext);
  const rollno=alumniData.rollno;
  //  console.log("Poo"+alumniData.rollno);
  useEffect(() => {
    fetch(`http://localhost:9000/webinars/list/${rollno}`)
      .then((response) => response.json())
      .then((data) => setWebinarData(data))
      .catch((error) => console.error("Error fetching webinars:", error));
  }, []);

  const handleSubmitWebinar = async () => {
    if (!eventName || !eventTime || !eventDescription || (!editId && !eventImage)) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("rollno", rollno);
    formData.append("webinarname", eventName);
    formData.append("time", eventTime);
    formData.append("description", eventDescription);
     console.log(formData);

    if (eventImage) {
      formData.append("image", eventImage);
    }

    const url = editId ? `http://localhost:9000/webinars/update/${editId}` : "http://localhost:9000/webinars/create";
    const method = editId ? "PUT" : "POST";

    try {
      const response = await fetch(url, { method, body: formData });
      const data = await response.json();

      if (response.ok) {
        setWebinarData(
          editId ? webinarData.map((webinar) => (webinar._id === editId ? data.webinar : webinar)) : [...webinarData, data.webinar]
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
    if (!window.confirm("Are you sure you want to delete this webinar?")) return;

    try {
      const response = await fetch(`http://localhost:9000/webinars/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setWebinarData(webinarData.filter((webinar) => webinar._id !== id));
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to delete webinar.");
      }
    } catch (error) {
      console.error("Error deleting webinar:", error);
    }
  };

  const handleEdit = (webinar) => {
    setEventName(webinar.webinarname);
    setEventTime(webinar.time);
    setEventDescription(webinar.description);
    setEditId(webinar._id);
    setEventImage(null); 
  };

  const resetForm = () => {
    setEventName("");
    setEventImage(null);
    setEventTime("");
    setEventDescription("");
    setEditId(null);
    document.getElementById("closeModal").click();
  };

  return (
    <div className="container mt-4">
 
      <div className="row justify-content-center">
        <div className="col-2">
        
        <button className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#createWebinarModal">
           Create Webinar
        </button>
        </div>
      </div>

     
      <div className="row mt-4">
        {webinarData.map((webinar) => (
          <div className="col-md-4 mb-3" key={webinar._id}>
            <div className="card text-center">
              <img
                src={`http://localhost:9000${webinar.image}`}
                alt={webinar.webinarname}
                className="img-fluid"
                style={{ height: "180px", width: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">{webinar.webinarname}</h5>
                <p className="card-text">{webinar.time}</p>
                <p className="card-text">{webinar.description}</p>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(webinar)} data-bs-toggle="modal" data-bs-target="#createWebinarModal">
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(webinar._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="modal fade" id="createWebinarModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editId ? "Edit Webinar" : "Create Webinar"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" id="closeModal"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control mb-2" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
              <input type="text" className="form-control mb-2" placeholder="Time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
              <textarea className="form-control mb-2" placeholder="Description" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
              <input type="file" className="form-control mb-2" accept="image/*" onChange={(e) => setEventImage(e.target.files[0])} />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-sm" onClick={handleSubmitWebinar}>
                {editId ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniWebinar;
