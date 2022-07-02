import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";

const Thread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost]);

  return (
    <div>
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Cards post={post} key={post._id} />;
          })}
      </ul>
    </div>
  );
};

export default Thread;
