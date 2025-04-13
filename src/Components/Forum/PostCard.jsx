import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/style/PostCard.css";
import user from '../../assets/images/user.png';

function PostCard({ forums }) {
  const navigate = useNavigate();

  return (
    <div>
      {forums.map((forum) => (
        <div key={forum._id} className="row ms-4 py-3">
          <div className="col-12 col-md-8">
            <div className="card rounded-4" onClick={() => navigate(`/forum/post/${forum._id}`, { state: forum })}>
              <div className="card-body">
               
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={forum.profileImg ? `http://localhost:9000${forum.profileImg}` : user}
                    alt={`${forum.username}'s avatar`}
                    className="pro rounded-circle me-3" 
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div className="h5 mb-0">{forum.username}</div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="text-start h5 fw-bold">
                      {forum.content}
                    </div>
                  </div>
                </div>

                {forum.imgPost && (
                  <div className="row mt-3">
                    <div className="col">
                      <img
                        src={`http://localhost:9000/uploads/${forum.imgPost}`}
                        alt="post content"
                        className="postt rounded-3 w-100"
                      />
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