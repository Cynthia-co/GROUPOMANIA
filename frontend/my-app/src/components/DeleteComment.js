import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../actions/post.action";
import { UidContext } from "./AppContext";

const DeleteComment = ({ comment, postId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(editComment(postId, comment._id, tect));
      setText("");
      setEdit(false);
    }
  };

  const handleDelete = () => dispatch(deleteComment(postId, comment._id));

  useEffect(() => {
    const checkAuthor = () => {
      if (uid === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [uid, comment.commenterId]);

  return (
    <div>
      {isAuthor && edit === false && (
        <span onClick={() => setEdit(!edit)}>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        </span>
      )}
      {isAuthor && edit && (
        <form action="" onSubmit={handleEdit}>
          <label htmlFor="text" onClick={() => setEdit(!edit)}>
            Modifier
          </label>
          <br />
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.text}
          />
          <div>
            <span
              onClick={() => {
                if (
                  window.confirm("Voulez-vous supprimer votre commentaire?")
                ) {
                  handleDelete();
                }
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </span>
          </div>
          <input type="submit" value="Enregistrer les modifications" />
        </form>
      )}
    </div>
  );
};

export default DeleteComment;
