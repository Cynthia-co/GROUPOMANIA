import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../actions/post.action";
import DeleteComment from "./DeleteComment";
import { timeStampParser } from "./Utils";

const Comment = ({ post }) => {
  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addComment(post._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getPosts()))
        .then(() => setText(""));
    }
  };

  return (
    <div>
      {post.comments.map((comment) => {
        return (
          <div className="comment" key={comment._id}>
            <div>
              <img
                className="comment-left"
                src={
                  !isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === comment.commenterId) return user.picture;
                      else return null;
                    })
                    .join("")
                }
              />
            </div>
            <div className="comment-right">
              <h3>{comment.commenterPseudo}</h3>
              <span>{timeStampParser(comment.timesteamp)}</span>
            </div>
            <p>{comment.text}</p>
            <DeleteComment comment={comment} postId={post._id}/>
          </div>
        );
      })}
      {userData._id && (
        <form action="" onSubmit={handleComment}>
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Commenter ici..."
          />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </div>
  );
};

export default Comment;
