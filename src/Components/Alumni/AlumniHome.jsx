import { useContext, useState, useEffect } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import AlumniContext from "../../Context/Alumni";
import AlumniRoute from "../../Routes/AlumniRoute";
import AlumniImage from "../../assets/images/user.png";

const AlumniHome = () => {
  const { alumniData, setAlumniData } = useContext(AlumniContext);
  const url = import.meta.env.VITE_HOST_URL;

  const [profilePic, setProfilePic] = useState(AlumniImage);
  const [formData, setFormData] = useState({
    Name: "",
    CompanyName: "",
    WorkLocation: "",
    Gmail: "",
    ProfilePhoto: null,
  });

  useEffect(() => {
    setFormData({
      Name: alumniData.Name || "",
      CompanyName: alumniData.CompanyName || "",
      WorkLocation: alumniData.WorkLocation || "",
      Gmail: alumniData.Gmail || "",
      ProfilePhoto: alumniData.ProfilePhoto ? `${url}${alumniData.ProfilePhoto}` : null,
    });
    setProfilePic(alumniData.ProfilePhoto ? `${url}${alumniData.ProfilePhoto}` : AlumniImage);
  }, [alumniData, url]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, ProfilePhoto: file }));
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    const data = new FormData();
    data.append("rollno", alumniData.rollno);
    data.append("Name", formData.Name);
    data.append("FieldofWorking", formData.CompanyName);
    data.append("CompanyName", formData.CompanyName);
    data.append("WorkLocation", formData.WorkLocation);
    data.append("Gmail", formData.Gmail);
    data.append("Linkedin", alumniData.Linkedin);

    if (formData.ProfilePhoto instanceof File) {
      data.append("ProfilePhoto", formData.ProfilePhoto);
    }

    try {
      const response = await fetch(`${url}/editalumni`, {
        method: "PUT",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setAlumniData({
          ...alumniData,
          ...formData,
          ProfilePhoto: result.alumni.ProfilePhoto || alumniData.ProfilePhoto,
        });
        document.getElementById("closeModal").click();
        alert("Profile updated successfully!");
      } else {
        alert("Update failed: " + result.message);
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid pt-5">
      <div className="row mt-4 ms-4 align-items-center">
        <div className="col-md-3 col-6 h5">Hello I'm</div>
      </div>

      <div className="row ms-md-5 text-center text-md-start">
        <div className="col h4">{formData.Name}</div>
      </div>

      <div className="row mt-4 ms-md-5 ps-md-4 text-center text-md-start pb-5">
        <div className="col h5 fw-normal d-flex justify-content-center justify-content-md-start align-items-center">
          <MdOutlineMailOutline />
          <span className="ms-2">{formData.Gmail || "N/A"}</span>
        </div>
      </div>

      <div className="row bg2 text-center">
        <div className="col-12">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h2 className="text-white fw-bold mt-3">{formData.Name}</h2>
          <h4 className="text-white">{formData.CompanyName || "N/A"}</h4>
          <p className="text-white">{formData.WorkLocation || "N/A"}</p>
          <button
            className="btn bg1 my-3"
            data-bs-toggle="modal"
            data-bs-target="#editProfileModal"
          >
            Edit Profile Section
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12 d-flex flex-wrap justify-content-center gap-3">
          <Link className="btn btn1 px-4 rounded-0 border" to="/alumnipage/alumnipost">Post</Link>
          <Link className="btn btn1 px-4 rounded-0 border" to="/alumnipage/alumniwebinar">Webinar</Link>
          <Link className="btn btn1 px-4 rounded-0 border" to="/alumnipage/alumniinternship">Internship</Link>
        </div>
      </div>

      <AlumniRoute />

      {/* Edit Profile Modal */}
      <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button className="btn-close" data-bs-dismiss="modal" id="closeModal"></button>
            </div>
            <div className="modal-body">
              <div className="text-center mb-3">
                <img
                  src={profilePic}
                  alt="Preview"
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <input
                  type="file"
                  className="form-control mt-2"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                />
              </div>

              {["Name", "CompanyName", "WorkLocation", "Gmail"].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="form-label">{field}</label>
                  <input
                    type={field === "Gmail" ? "email" : "text"}
                    name={field}
                    className="form-control"
                    value={formData[field]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniHome;
