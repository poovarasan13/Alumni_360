// frontend: AddStudents.js
import React, { useState } from 'react';

const AddStudents = () => {
  const [batch, setBatch] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log("enter upload");
    try {
      if (!batch || !file) {
        throw new Error('Please select a batch and upload a file.');
      }
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('batch', batch);
  
      console.log("Preparing to upload...", formData);
  
      const response = await fetch('http://localhost:9000/upload-students', {
        method: 'POST',
        body: formData,
      });
  
      console.log("Received response:", response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Parsed response data:", data);
  
      alert(data.message);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

  return (
    <div className="container pt-5 mt-5 d-flex justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg p-4 border-0 rounded-3">
          <div className="card-body">
            <h4 className="text-center text-primary mb-4">Add Students</h4>
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Select Batch</label>
                <select
                  className="form-select"
                  name="batch"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                >
                  <option value="" disabled>Select Batch</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Upload File</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={handleFileChange}
                />
                <div className="row justify-content-center">
                  <div className="col-11">
                    <small className="text-justify  text-danger">
                      Note: CSV File Format should be name, rollno, batch, department, alumni, mobile, password
                    </small>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudents;
