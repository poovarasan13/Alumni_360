import React, { useState } from "react";
import Top from "./Top";
import CreateComponent from "./CreateComponent";

const ForumHome = () => {
  const [showForum, setShowForum] = useState(true);

  return (
    <>
      <Top setShowForum={setShowForum} />
      
      {showForum ? (
        <div className="container">
          <div className="row">
            <div className="col-4">Poovarasan</div>
            <div className="col-4">Poovarasan</div>
            <div className="col-4">Poovarasan</div>
            <div className="col-4">Poovarasan</div>
          </div>
        </div>
      ) : (
        <CreateComponent onClose={() => setShowForum(true)} />
      )}
    </>
  );
};

export default ForumHome;
