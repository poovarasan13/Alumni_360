import React, { useState } from "react";
import CardImage from "../../assets/images/AlumniCourse.png";
import image2 from "../../assets/images/alumniDetails.png";

const AkumniWebinar = () => {
  const [webinarData, setWebinarData] = useState([
    {
      name: "Webinar on IoT",
      image: CardImage,
      description: "",
      link: "",
    },
    {
      name: "Webinar on Automation",
      image: image2,
      description: "",
      link: "",
    },
  ]);

  const [eventName, setEventName] = useState("");
  const [eventImage, setEventImage] = useState(null);

  const handleCreateWebinar = () => {
    if (eventName && eventImage) {
      setWebinarData([
        ...webinarData,
        {
          name: eventName,
          image: URL.createObjectURL(eventImage), // Create a preview URL for the uploaded image
          description: "",
          link: "",
        },
      ]);
      setEventName("");
      setEventImage(null);
      document.getElementById("closeModal").click(); // Close the modal
    }
  };

  return (
    <div>
      {/* Create Webinar Button */}
      <div className="row justify-content-center pt-3">
        <div className="col-2">
          <div className="card border border-3 text-center bg-white p-3">
            <div className="card-body">
              <div className="card-text fs-5">Create a webinar</div>
              <div className="col py-2">
                {/* Button triggers modal */}
                <button
                  className="btn btn-sm btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#createWebinarModal"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Webinars List */}
      <div className="ps-5 row">
        <div className="col-3">
          <div className="fs-4">Webinars</div>
        </div>
      </div>
      <div className="row mb-3 px-5 mx-5">
        {webinarData.map((webinar, index) => (
          <div className="col-3 mt-3" key={index}>
            <div className="card text-center">
              <img
                src={webinar.image}
                alt={webinar.name}
                className="img img-fluid px-3 pt-3"
                style={{ height: "200px", width: "300px" }}
              />
              <div className="card-body">
                <div className="card-text h6">{webinar.name}</div>
                <div className="btn btn-sm btn-warning">Start</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Webinar Modal */}
      <div
        className="modal fade"
        id="createWebinarModal"
        tabIndex="-1"
        aria-labelledby="createWebinarLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createWebinarLabel">
                Create Webinar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeModal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Event Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Select Image</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => setEventImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCreateWebinar}
              >
                Create
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkumniWebinar;
