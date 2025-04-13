import { Link } from "react-router-dom";
import "../assets/style/ForumSideBar.css";

const categories = [
  "Home",
  "Programming",
  "Software & Apps",
  "Artificial Intelligence & Machine Learning",
  "Computers & Hardwares",
  "Trending Technologies",
  "Virtual & Augmented Reality",
  "DIY Electronics",
  "3D Printing",
  "Tech News & Discussion",
  "Education & Career",
  "Memes",
  "Q & A"
];

const ForumSideBar = () => {
  return (
    <div className="row sidebar-scroll">
      <div className="row mx-auto">
       
        <Link className="list-group-item list-group-item-action pt-2 h6" to="/forum">
          Home
        </Link>
      </div>
      <hr />
     
      {categories.slice(1).map((category, index) => (
        <Link
          key={index}
          className="list-group-item list-group-item-action py-2 h6"
          to={`/forum/${category}`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default ForumSideBar;
