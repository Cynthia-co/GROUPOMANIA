import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty, timeStampParser } from "./Utils";

const NewPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);

  const handlePost = async () => {
    if (message || postPicture || video) {
        const data = new FormData();
        data.append('posterId', userData._id);
        data.append('message', message);
        if (file) data.append('file', file);
        data.append('video');
    }else {
        alert('Veuillez entrer un message')
    }
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo("");
  };

  const cancelPost = () => {
    setMessage("");
    setPostPicture("");
    setVideo("");
    setFile("");
  };

  const handleVideo = () => {
    let findLink = message.split(" ");
    for (let i = 0; i < findLink.length; i++) {
      if (
        findLink[i].includes("https://www.yout") ||
        findLink[i].includes("https://yout")
      ) {
        let embed = findLink[i].replace("watch?v=", "embed/");
        setVideo(embed.split("&")[0]);
        findLink.splice(i, 1);
        setMessage(findLink.join(" "));
        setPostPicture("");
      }
    }
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);
    handleVideo();
  }, [userData, message, video]);

  return (
    <div>
      {isLoading ? (
        <FontAwesomeIcon icon="fa-solid fa-spinner" />
      ) : (
        <>
          <div className="user-photo">
            <NavLink exact to="/profile">
              <img src={userData.picture} alt="user-pic" />
            </NavLink>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Quoi de beau aujourd'hui?"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="footer-post">
                <div className="icon">
                  {isEmpty(video) && (
                    <>
                      <FontAwesomeIcon icon="fa-solid fa-image" />
                      <input
                        className="hidden"
                        type="file"
                        id="file-upload"
                        name="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => handlePicture(e)}
                      />
                      {message || postPicture || video.length > 20 ? (
                        <li>
                          <div>
                            <img src={userData.picture} />
                          </div>
                          <div>
                            <h3>{userData.pseudo}</h3>
                          </div>
                          <span>{timeStampParser(Date.now())}</span>
                          <p>{message}</p>
                          <img src={postPicture} />
                          {video && (
                            <iframe
                              width="500"
                              height="300"
                              src={post.video}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="{video}"
                            ></iframe>
                          )}
                        </li>
                      ) : null}
                    </>
                  )}
                  {video && (
                    <button onClick={setVideo("")}>Supprimer la vidéo</button>
                  )}
                </div>
                <div>
                  {message || postPicture || video.length > 20 ? (
                    <button onClick={cancelPost}>Annuler</button>
                  ) : null}
                  ;<button onClick={handlePost}>Envoyer</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      ;
    </div>
  );
};

export default NewPost;
