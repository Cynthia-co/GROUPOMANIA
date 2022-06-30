import React, { useState } from "react";
import {useDispatch, useSelector } from 'react-redux';
import { uploadPicture } from "../actions/user.actions";

const Uploadimg = () => {
  
 const [file, setFile] = useState();

 const dispatch = useDispatch();

 const userData = useSelector((state) => state.userReducer);

 const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);
    dispatch(uploadPicture(data, userData._id));
  };

  return (
    <div>
      <form onSubmit={handlePicture}>
        <label>Modifier la photo</label>
        <input
          type="file"
          id="file"
          name="photo"
          accept=".jpg .jpeg .png"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input type='submit' value='Enregistrer' />
      </form>
    </div>
  );
};

export default Uploadimg;
