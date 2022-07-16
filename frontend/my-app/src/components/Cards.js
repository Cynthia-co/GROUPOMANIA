import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../actions/post.action";
import DeletePost from "./DeletePost";
import LikeButton from "./LikeButton";

const Cards = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const updateItem = async () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(userData[0]) && setIsLoading(false);
  }, [userData]);

  return (
    <li className="cards" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin" />
      ) : (
        <div className="card-left">
          <img
            src={
              !isEmpty(userData[0]) &&
              usersData
                .map((user) => {
                  if (user._id === postMessage.posterId) return user.picture;
                  else return null;
                })
                .join("")
            }
            alt="posterpicture"
          />
        </div>
      )}
      <div className="card-pseudo">
        <h2>
          {!isEmpty(userData[0]) &&
            usersData
              .map((user) => {
                if (user._id === postMessage.posterId) return user.pseudo;
                else return null;
              })
              .join("")}
        </h2>
      </div>
      <div className="timeline">
        <span>{dateParser(post.createdAt)}</span>
      </div>
      {isUpdated === false && <p>{post.message}</p>};
      {isUpdated === true && (
        <div>
          <textearea
            defaultValue={post.message}
            onChange={(e) => setTextUpdate(e.target.value)}
          />
          <button onClick={updateItem}>Enregistrer</button>
        </div>
      )}
      {post.picture && (
        <img src={post.picture} alt="post-picture" className="post-pic" />
      )}
      {post.video && (
        <iframe
          width="500"
          height="300"
          src={post.video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="{post._id}"
        ></iframe>
      )}
      {userData._id === post.posterId && (
        <div onClick={() => setIsUpdated(!isUpdated)}>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        </div>
      )}
      <DeletePost id={post._id} />
      <div className="comment">
        <FontAwesomeIcon icon="fa-solid fa-comments" />
        <span>{post.comments.length}</span>
      </div>
      <div className="like">
        <LikeButton post={post} />
      </div>
    </li>
  );
};

export default Cards;
