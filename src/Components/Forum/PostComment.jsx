import React from "react";

function PostComment({ pName, pComment, pImage }) {
  return (
    <div className="d-flex align-items-start mb-3 comment">
      <img
        src={pImage}
        alt={pName}
        className="rounded-circle me-3"
        style={{ width: "40px", height: "40px" }}
      />
      <div>
        <div className="fw-bold">{pName}</div>
        <div>{pComment}</div>
      </div>
    </div>
  );
}

export default PostComment;
