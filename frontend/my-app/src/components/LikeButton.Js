import React, { useContext, useEffect, useState } from 'react';
import {UidContext} from "../AppContext";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const LikeButton = ({post}) => {
    const [liked, setLiked] = useState(false);
    const uid = useContext(UidContext);
    
    useEffect(() => {
        if (post.likers.includes(uid)) setLiked(true)
    }, [uid, post.likers, liked])

    return (
        <div>
           {uid ===nul &&
            <Popup trigger={<FontAwesomeIcon icon="fa-solid fa-heart" />} position={['bottom right']} closeOnDocumentClick></Popup>
        }
           }
        </div>
    );
};

export default LikeButton;