import React from "react";
import user from "../../assets/images/user.png";

function PostComment({ pName, pComment, pImage }) {
  return (
    <div className="d-flex mb-3">
      <div className="flex-shrink-0">
        <img
          src={!pImage || pImage === user ? user : `http://localhost:9000${pImage}`}
          alt={pName}
          className="rounded-circle"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex-grow-1 ms-3 text-start">
        <div className="mb-1">
          <span className="fw-bold">{pName}</span>
        </div>
        <p className="mb-0" style={{ lineHeight: "1.4" }}>
          {pComment}
        </p>
      </div>
    </div>
  );
}

export default PostComment;
