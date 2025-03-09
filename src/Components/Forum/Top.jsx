import React from "react";

const Top = ({ setShowForum }) => {
  return (
    <div className="container-fluid pt-3">
      <div className="row justify-content-end">
        <div className="col-3">
          <button 
            className="btn btn-secondary py-2 px-3 rounded-5" 
            onClick={() => setShowForum(false)}  // Hides Forum and Shows CreateComponent
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
