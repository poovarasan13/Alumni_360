import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PostComment from "./PostComment";
import "../../assets/style/PostCard.css";
import user from "../../assets/images/user.png";
import AlumniContext from "../../Context/Alumni";
import UserContext from "../../Context/Student";

import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share";

function PostDetails() {
  const { id } = useParams();
  const shareButtonRef = useRef(null);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const navigate = useNavigate();
  const { alumniData } = useContext(AlumniContext);
  const { name } = useContext(UserContext);
  const [forum, setForum] = useState(null);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("Guest");
  const [userImage, setUserImage] = useState(user);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [postUrl, setPostUrl] = useState("");

  useEffect(() => {
    if (alumniData) {
      setUserName(alumniData.Name);
      setUserImage(alumniData.ProfilePhoto);
    }
  }, [alumniData]);

  useEffect(() => {
    if (name) {
      setUserName(name);
    }
  }, [name]);

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:9000/forums/${id}`);
      setForum(response.data);
      // Generate a random post URL
      const randomString = Math.random().toString(36).substring(2, 15);
      const generatedPostUrl = `http://localhost:9000/forums/${id}-${randomString}`;
      setPostUrl(generatedPostUrl);
    } catch (err) {
      setError("Failed to fetch post. Please try again later.");
      console.error("Error fetching forum post:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  const handleAddComment = async () => {
    if (!comment.trim()) {
      setError("Please enter a valid comment.");
      return;
    }

    try {
      const newComment = {
        pName: userName,
        pComment: comment,
        pImage: userImage,
      };

      await axios.post(`http://localhost:9000/forums/${id}/comments`, newComment);
      setComment("");
      setError(null);
      fetchPost();
    } catch (err) {
      setError("Failed to add comment. Please try again.");
      console.error("Error adding comment:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!forum) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">Post not found</div>
      </div>
    );
  }
  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className="container mt-3 mt-md-4">
      <div className="row justify-content-center">
        <div className="col-11">
          <div className="card rounded-4 shadow-sm">
            <div className="card-body p-3 p-md-4">
              <div className="d-flex align-items-center mb-4">
                <button
                  className="btn btn-link p-0 me-3"
                  onClick={() => navigate(-1)}
                  aria-label="Go back"
                >
                  <i className="bi bi-arrow-left-circle fs-2"></i>
                </button>
                <div className="d-flex align-items-center">
                  <img
                    src={
                      forum.profileImg
                        ? `http://localhost:9000${forum.profileImg}`
                        : user
                    }
                    alt="author"
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "40px", objectFit: "cover" }}
                  />
                  <div className="h4 mb-0">{forum.username}</div>
                </div>
              </div>
              <div className="mb-4 text-start">
                <div className="h3 fw-bold mb-3">{forum.content}</div>
                {forum.para && <p className="text-muted fs-5">{forum.para}</p>}
              </div>

              {forum.imgPost && (
                <div className="mb-4 w-100 text-center">
                  <img
                    src={`http://localhost:9000/uploads/${forum.imgPost}`}
                    alt="post"
                    className="img-fluid rounded-4"
                    style={{
                      maxHeight: "70vh",
                      width: "auto",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}

              <div className="mb-4 ms-3 d-flex justify-content-start align-items-center">
                <button
                  className="btn btn-sm btn-outline-secondary me-3"
                  onClick={toggleShareOptions}
                  ref={shareButtonRef}
                >
                  <i className="bi bi-share-fill me-1"></i>
                </button>

                {showShareOptions && (
                  <div
                    className="d-flex position-absolute bg-light p-2 rounded shadow"
                    style={{ zIndex: 1, marginTop: "-50px" }}
                  >
                    <WhatsappShareButton
                      url={postUrl}
                      title={forum?.content}
                      className="me-2"
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <FacebookShareButton
                      url={postUrl}
                      quote={forum?.content}
                      className="me-2"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={postUrl}
                      title={forum?.content}
                      className="me-2"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton
                      url={postUrl}
                      title={forum?.content}
                      summary={forum?.para}
                      source={window.location.origin}
                      className="me-2"
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <RedditShareButton
                      url={postUrl}
                      title={forum?.content}
                      className="me-2"
                    >
                      <RedditIcon size={32} round />
                    </RedditShareButton>
                    <EmailShareButton
                      url={postUrl}
                      subject={forum?.content}
                      body={forum?.para}
                      className="me-2"
                    >
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                  </div>
                )}
              </div>
              <div className="border-top pt-4">
                <h4 className="mb-4 text-start">
                  Comments ({forum.comments.length})
                </h4>

                <div className="mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={
                        !userImage || userImage === user
                          ? user
                          : `http://localhost:9000${userImage}`
                      }
                      alt={userName}
                      className="rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex-grow-1">
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          await handleAddComment();
                        }}
                      >
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control rounded-pill py-2 px-3"
                            placeholder="Write your comment..."
                            value={comment}
                            onChange={(e) => {
                              setComment(e.target.value);
                              setError(null);
                            }}
                          />
                          <button
                            className="btn btn-primary rounded-pill ms-2 px-4"
                            type="submit"
                            disabled={!comment.trim()}
                          >
                            Post
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {error && (
                    <div className="text-danger mt-2 text-start">{error}</div>
                  )}
                </div>

                <div className="mt-3">
                  {forum.comments.length > 0 ? (
                    forum.comments.map((c, i) => (
                      <PostComment key={i} {...c} />
                    ))
                  ) : (
                    <div className="text-center py-4 text-muted fs-5">
                      No comments yet. Be the first to comment!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
