import { Link } from "react-router-dom";
import "../../assets/style/SButton.css";

const SButton = (props) => {
  return (
    <div className="row justify-content-center py-3">
      <div className={`col-10 ${props.color} rounded-4`}>
        {/* If a path is provided, use Link; otherwise, use button */}
        {props.path ? (
          <Link to={props.path} className="text-decoration-none">
            <div className="row justify-content-center">
              <div
                className="col-4 pt-2 h5 text-white"
                style={{ color:  "rgb(85,23,94)" }}
              >
                {props.name}
              </div>
            </div>
          </Link>
        ) : (
          <button
            type={props.type || "button"}
            className="btn w-100 text-white"
            style={{ backgroundColor: "rgb(85,23,94)" }}
            onClick={props.onClick}
          >
            {props.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default SButton;
