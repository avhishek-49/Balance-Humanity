import React, { useState, useRef, useEffect } from "react";
import "./styles/main_style.css";
import { Avatar } from "@material-ui/core";
import { FaCross, FaTrashAlt } from "react-icons/fa";

const CommentSection = ({ postId, email, image }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    // Handle api request maybe use useEffect for fetch
    // Logic to handle comment submission, e.g., add the new comment to the comments array
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };
  const handleClearComment = () => {
    setNewComment("");
  };
  console.log({ comments, newComment });
  return (
    <div className="comment-section">
      <h5>Comments</h5>
      <div>
        <div className="comment-form">
          <Avatar alt={email} src={image} />
          <textarea
            className="custom-textarea"
            placeholder="Type your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="clear-comment">
            <FaTrashAlt onClick={handleClearComment} />
          </div>
          <button className="btn comment-btn" onClick={handleCommentSubmit}>
            Comment
          </button>
        </div>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <Comment key={index} text={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

const Comment = ({ image, email, text }) => (
  <div className="comment-content">
    <Avatar alt={email} src={image} />
    <div className="comment-details">
      <p className="comment-email">
        {/*for test: replace with dynamic email*/}
        <b>email@test.com</b>
      </p>
      <p className="comment-text">{text}</p>
    </div>
  </div>
);
