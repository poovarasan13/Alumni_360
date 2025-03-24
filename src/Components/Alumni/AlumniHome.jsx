import { useContext, useState ,useEffect } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import AlumniImage from "../../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import AlumniRoute from "../../Routes/AlumniRoute";
import AlumniContext from "../../Context/Alumni";

const AlumniHome = () => {
  const navigate = useNavigate();
  const { alumniData,setAlumniData } = useContext(AlumniContext);
  console.log(alumniData);
  const url = import.meta.env.VITE_HOST_URL;
  const [name, setName] = useState(alumniData.Name); // Use 'Name' instead of 'name'
  const [job, setJob] = useState(alumniData.CompanyName); // Use 'CompanyName'
  const [location, setLocation] = useState(alumniData.WorkLocation); // Use 'WorkLocation'
  const [email, setEmail] = useState(alumniData.Gmail); // Use 'Gmail'
  // const [profilePic, setProfilePic] = useState(`http://localhost:9000${alumniData.ProfilePhoto}`); // Correct image path
  useEffect(() => {
    setName(alumniData.Name);
    setJob(alumniData.CompanyName);
    setLocation(alumniData.WorkLocation);
    setEmail(alumniData.Gmail);
    setProfilePic(alumniData.ProfilePhoto ? `${url}${alumniData.ProfilePhoto}` : AlumniImage);
  }, [alumniData]);
  const [profilePic, setProfilePic] = useState(
    alumniData.ProfilePhoto
      ? `${url}${alumniData.ProfilePhoto}`
      : AlumniImage
  );

  const [editName, setEditName] = useState(name);
  const [editJob, setEditJob] = useState(job);
  const [editLocation, setEditLocation] = useState(location);
  const [editEmail, setEditEmail] = useState(email);
  const [editProfilePic, setEditProfilePic] = useState(profilePic);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEditProfilePic(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();
    formData.append("rollno", alumniData.rollno);
    formData.append("Name", editName);
    formData.append("FieldofWorking", editJob);
    formData.append("WorkLocation", editLocation);
    formData.append("Gmail", editEmail);
    formData.append("CompanyName", editJob);
    formData.append("Linkedin", alumniData.Linkedin);
  
    if (editProfilePic instanceof File) {
      formData.append("ProfilePhoto", editProfilePic);
    }
  
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    try {
      const response = await fetch(`${url}/editalumni`, {
        method: "PUT",
        body: formData,
      });
  
      const data = await response.json();
      console.log("Response:", data);
  
      if (data.success) {
        setAlumniData({
          ...alumniData,
          Name: editName,
          FieldofWorking: editJob,
          WorkLocation: editLocation,
          Gmail: editEmail,
          CompanyName: editJob,
          ProfilePhoto: data.alumni.ProfilePhoto || null, // Ensure updated in UI
        });
  
        document.getElementById("closeModal").click();
        alert("Profile updated successfully!");
      } else {
        alert("Error updating profile: " + data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };
  

  return (
    <div className="container-fluid pt-5">
      <div className="row mt-4 ms-4 align-items-center">
        <div className="col-md-3 col-6 h5">Hello I'm</div>
      </div>

      <div className="row ms-md-5 text-center text-md-start">
        <div className="col h4">{}</div>
      </div>

      <div className="row mt-4 ms-md-5 ps-md-4 text-center text-md-start pb-5 md-pb-0">
        <div className="col h5 fw-normal d-flex justify-content-center justify-content-md-start align-items-center">
          <MdOutlineMailOutline /> <span className="ms-2">{email || "N/A"}</span>
        </div>
      </div>

      <div className="row bg2 position-relative text-center">
        <div className="col-12">
          <div className="position-relative d-flex justify-content-center">
          <img
  src={profilePic || AlumniImage} // Use default placeholder if profilePic is empty
  alt="Profile Preview"
  className="rounded-circle"
  style={{ width: "200px", height: "200px", objectFit: "cover" }}
/>
          </div>
        </div>

        <div className="col-12  pt-3">
          <h2 className="text-white fw-bold">{name}</h2>
        </div>

        <div className="col-12">
          <h4 className="text-white">{job ||" N/A"}</h4>
        </div>

        <div className="col-12">
          <p className="text-white">{location ||"N/A"}</p>
        </div>

        <div className="col-12 mb-3">
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn bg1"
              data-bs-toggle="modal"
              data-bs-target="#editProfileModal"
            >
              Edit Profile Section
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12 d-flex flex-wrap justify-content-center gap-3">
          <Link
            className="btn btn1 px-4 rounded-0 border"
            to="/alumnipage/alumnipost"
          >
            Post
          </Link>
          <Link
            className="btn btn1 px-4 rounded-0 border"
            to="/alumnipage/alumniwebinar"
          >
            Webinar
          </Link>
          <Link
            className="btn btn1 px-4 rounded-0 border"
            to="/alumnipage/alumniinternship"
          >
            Internship
          </Link>
        </div>
      </div>

      <AlumniRoute />

      {/* Edit Profile Modal */}
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
        aria-labelledby="editProfileLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editProfileLabel">
                Edit Profile
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
              {/* Profile Picture Preview & Upload */}
              <div className="text-center mb-3">
                <img
                  src={editProfilePic}
                  alt="Profile Preview"
                  className="rounded-circle"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <input
                  type="file"
                  className="form-control mt-2"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Job</label>
                <input
                  type="text"
                  className="form-control"
                  value={editJob}
                  onChange={(e) => setEditJob(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveChanges}
              >
                Save Changes
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

export default AlumniHome;
