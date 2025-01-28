import Image from "../../assets/images/Profile.png";
import "../../assets/style/PostComment.css";

const PostComment = (props) => {
    return (
        <>
            <div className="row mt-2">
                <div className="row mt-2 ms-2">
                    <div className="row justify-content-start align-items-center no-gap">
                        <div className="col-auto no-padding">
                            <img src={Image} alt="image" className="img-c" />
                        </div>
                        <div className="col-auto no-padding">
                            <div className="name">{props.pName}</div>
                        </div>
                    </div>
                </div>
                <div className="row ms-4 ">
                    <div className="col">
                        <div className="text text-start fs-6 ">I love this idea. Though i would feel like it needs to be thicker no?</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostComment;
