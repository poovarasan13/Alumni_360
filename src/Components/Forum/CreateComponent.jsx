import React, { useState } from 'react';

const CreateComponent = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Post Created:', { title, body, url, image });

    setTitle('');
    setBody('');
    setUrl('');
    setImage(null);

    onClose(); 
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

         
          <div className="mb-3">
            <textarea
              className="form-control border-0 shadow-sm p-3"
              rows="4"
              placeholder="What's on your mind?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

        
          <div className="mb-3">
            <input
              type="url"
              className="form-control border-0 shadow-sm p-2"
              placeholder="Add a URL (optional)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

        
          <div className="mb-3">
            <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
          </div>

          
          {image && (
            <div className="mb-3 text-center">
              <img src={image} alt="Preview" className="img-fluid rounded" style={{ maxHeight: '250px' }} />
            </div>
          )}

     
          <div className="d-flex justify-content-end gap-3">
            <button type="button" className="btn btn-light px-4 py-2" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary px-4 py-2">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateComponent;
