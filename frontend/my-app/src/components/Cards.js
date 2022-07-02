import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LikeButton from "./LikeButton";

const Cards = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

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
              })
              .join("")}
        </h2>
      </div>
      <div className="timeline">
        <span>{dateParser(post.createdAt)}</span>
      </div>
      <p>{post.message}</p>
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
