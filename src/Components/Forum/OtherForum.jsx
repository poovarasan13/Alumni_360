import "../../assets/style/OtherForum.css";
import PostCard from "./PostCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OtherForum = () => {
  const [forums, setForums] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:9000/forums/type/${type}`)
  .then((res) => {
 
    setForums(res.data);
  })
  .catch((err) => console.error("Error fetching forums:", err));
  }, [type]);

  return (
    <div className="container mt-3">
      <div className="row text-start mt-3">
        <div className="col">
          <div className="text h4 fw-bold">{type}</div>
        </div>
      </div>
      <PostCard forums={forums} />
    </div>
  );
};

export default OtherForum;
