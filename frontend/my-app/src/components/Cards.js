import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cards = ({post}) => {
  const [isLoading, setIsLoading] = useState(true)
const usersData= useSelector((state) => state.usersReducer);
const userData= useSelector((state) => state.userReducer);

useEffect(() => {
  !isEmpty(userData[0]) && setIsLoading(false);
}, [userData])

  return (
    <li className="cards" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"/>
      ) : (
        <h2>test</h2>
      )}
    </li>
  );
};

export default Cards;
