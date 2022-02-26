import React, { useState } from "react";
import { postCommentToVenueById } from "../utils.js/be-api.js";

const CreateNewComment = ({ id, setComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCommentDetail = {
      author: "TestUser",
      body: newComment,
      total_confirmed_votes: 0,
    };

    postCommentToVenueById(id, newCommentDetail)
      .then(() => {
        setComments((current) => {
          return [newCommentDetail, ...current];
        });
      })
      .then(() => {
        setNewComment("");
      });
  };

  return (
    <>
      <div className="commentBox" onSubmit={handleSubmit}>
        <form>
          <label for="commentBox"></label>
          <input
            type="text"
            id="commentBox"
            name="commentBox"
            placeholder="Type your comment here..."
            value={newComment}
            onChange={handleCommentChange}
            required
          ></input>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </>
  );
};

export default CreateNewComment;
