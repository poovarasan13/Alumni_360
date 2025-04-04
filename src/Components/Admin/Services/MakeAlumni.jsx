import React,{useState} from 'react'

const MakeAlumni = () => {
     const [batch, setBatch] = useState('');
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


              <div className="text-center">
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm" 
                //   onClick={}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeAlumni
