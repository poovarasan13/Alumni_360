import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/style/PostCard.css";

function PostCard({ forums }) {
  const navigate = useNavigate();
    
  return (
    <div>
      {forums.map((forum) => (
           
        <div key={forum._id} className="row ms-4 py-3">
          <div>{forum.imgPost}</div>
          <div className="col-8">
            <div className="card rounded-4" onClick={() => navigate(`/forum/${forum._id}`, { state: forum })}>
              <div className="card-body">
                <div className="row justify-content-start">
                  <div className="col-1 rounded">
                    <img src={forum.avatar } alt="av" className="pro" />
                  </div>
                  <div className="col-2">
                    <div className="name">{forum.name}</div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="text-start h5 fw-bold">
                      {forum.content}
                    </div>
                  </div>
                </div>

                {forum.imgPost && (
                  <div className="row">
                    <div className="col">
                    <img src={`http://localhost:9000/uploads/${forum.imgPost}`} alt="post" className="postt rounded-3" />

                    </div>
                  </div>
                )}

                <div className="row mt-3">
                  <div className="col-1 text-end">
                    <i className="bi bi-share-fill"></i>
                  </div>
                  <div className="col-1 text">
                    <i className="bi bi-chat-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
