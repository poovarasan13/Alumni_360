import "../../assets/style/OtherForum.css";
import PostCard from "./PostCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const OtherForum = () => {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/forums")
      .then((res) => setForums(res.data))
      .catch((err) => console.error("Error fetching forums:", err));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row text-start mt-3">
        <div className="col">
          <div className="text h4 fw-bold">3D Printing</div>
        </div>
      </div>
      <PostCard forums={forums} />
    </div>
  );
};

export default OtherForum;
