import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import AlumniContext from '../../Context/Alumni';
import UserContext from '../../Context/Student';

const CreateComponent = ({ onClose, onPostCreated }) => {
  const [uname, setName] = useState('');
  const [content, setContent] = useState('');
  const [para, setPara] = useState('');
  const [imgPost, setImgPost] = useState(null);
  const [forumType, setForumType] = useState('');
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [urollno, setRollno] = useState('');
  const { alumniData } = useContext(AlumniContext);
  const {name,rollno}=useContext(UserContext);
  useEffect(() => {
    if (alumniData) {
      setUsername(alumniData.Name);
      setRollno(alumniData.rollno);
      setProfile(alumniData.ProfilePhoto);
    }
  }, [alumniData]);
  useEffect(() => {
    if (name) {
      setUsername(name);
      setRollno(rollno);
     
    }
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", uname);
    formData.append("content", content);
    formData.append("para", para);
    formData.append("forumType", forumType);
    formData.append("username", username);
    formData.append("profileImg", profile);
    formData.append("rollno", urollno);
    if (imgPost) {
      formData.append("imgPost", imgPost);
    }

    try {
      await axios.post("http://localhost:9000/forums", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setName('');
      setContent('');
      setPara('');
      setImgPost(null);
      setForumType('');
      setProfile('');
      setUsername('');
      setRollno('');

      onPostCreated();
      onClose();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgPost(file);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card shadow p-4 w-50">
        <h3 className="mb-3 fw-bold">Create a Post</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select
              className="form-select border-0 shadow-sm p-2"
              value={forumType}
              onChange={(e) => setForumType(e.target.value)}
              required
            >
              <option value="">Select Forum Type</option>
              <option value="Programming">Programming</option>
              <option value="Software & Apps">Software & Apps</option>
              <option value="Artificial Intelligence & Machine Learning">
                Artificial Intelligence & Machine Learning
              </option>
              <option value="Computers & Hardwares">Computers & Hardwares</option>
              <option value="Trending Technologies">Trending Technologies</option>
              <option value="Virtual & Augmented Reality">Virtual & Augmented Reality</option>
              <option value="DIY Electronics">DIY Electronics</option>
              <option value="3D Printing">3D Printing</option>
              <option value="Tech News & Discussion">Tech News & Discussion</option>
              <option value="Education & Career">Education & Career</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-0 shadow-sm p-2"
              placeholder="Title"
              value={uname}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control border-0 shadow-sm p-3"
              rows="4"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-0 shadow-sm p-2"
              placeholder="Additional Text (para)"
              value={para}
              onChange={(e) => setPara(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>
          {imgPost && (
            <div className="mb-3 text-center">
              <img
                src={URL.createObjectURL(imgPost)}
                alt="Preview"
                className="img-fluid rounded"
                style={{ maxHeight: '250px' }}
              />
            </div>
          )}
          <div className="d-flex justify-content-end gap-3">
            <button
              type="button"
              className="btn btn-light px-4 py-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary px-4 py-2">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateComponent;
