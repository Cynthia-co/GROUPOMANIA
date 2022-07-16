import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/post.action";

const DeletePost = (props) => {
  const dispatch = useDispatch();
  const deleteQuote = () => dispatch(deletePost(props.id));
  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez vous vraiment supprimer votre article?")) {
          deleteQuote();
        }
      }}
    >
      <FontAwesomeIcon icon="fa-solid fa-trash-can" />
    </div>
  );
};

export default DeletePost;
