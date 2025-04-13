import React, { useState, useEffect } from 'react';
import Top from "./Top";
import axios from "axios";
import CreateComponent from "./CreateComponent";
import PostCard from "./PostCard";

const ForumHome = () => {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForum, setShowForum] = useState(false);

  const fetchForums = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/forums`);
      setForums(response.data);
      console.log(response.data);
    } catch (e) {
      setError("Failed to fetch forums");
      console.error("Error in fetching data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForums();
  }, []);

  const handlePostCreated = () => {
    fetchForums(); 
  };

  if (loading) {
    return <div className="container mt-3">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-3">{error}</div>;
  }

  return (
    <div className="container mt-3">
      <Top setShowForum={setShowForum} showForum={showForum} />
      <div className="row justify-content-end">
        <div className="col-12">
          {showForum && (
            <CreateComponent
              onClose={() => setShowForum(false)}
              onPostCreated={handlePostCreated}
            />
          )}
        </div>
      </div>
      {!showForum && (
      <div>
      <div className="row text-start mt-3">
        <div className="col">
          <div className="text h4 fw-bold">Home</div>
        </div>
      </div>
      <PostCard forums={forums} />
      </div>
      )}
    </div>
  );
};

export default ForumHome;
