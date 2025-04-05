import React, { useState } from 'react';
import axios from 'axios';

const CreateComponent = ({ onClose }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [para, setPara] = useState('');
  const [imgPost, setImgPost] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    formData.append("para", para);
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
            <input
              type="text"
              className="form-control border-0 shadow-sm p-2"
              placeholder="Title"
              value={name}
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
            <button
              type="submit"
              className="btn btn-primary px-4 py-2"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateComponent;
