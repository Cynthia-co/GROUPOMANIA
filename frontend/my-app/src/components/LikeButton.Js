import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likePost } from "../actions/post.action";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const like = () => {
    dispatch(likePost(post._id, uid));
    setLiked(true);
  }

  const unlike = () => {
    dispatch(unlikePost(post._id, uid));
    setLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers, liked]);

  return (
    <div>
      {uid === nul && (
        <Popup
          trigger={<FontAwesomeIcon icon="fa-light fa-heart" />}
          position={["bottom right"]}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour Liker!</div>
        </Popup>
      )}
      {uid && liked === false && (
        <FontAwesomeIcon icon="fa-solid fa-heart" onClick="{like}" />
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;
