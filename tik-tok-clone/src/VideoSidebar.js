import React from 'react';
import './VideoSidebar.css';
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import MessageIcon from "@material-ui/icons/Message";
// import ShareIcon from "@material-ui/icons/Share";


function VideoSidebar() {
    return (
        <div className="videoSiderbar">
            <div className="videoSiderbar__button">
                {/* <FavoriteIcon/> */}
                <p>300</p>

            </div>

            <div className="videoSiderbar__button">
                {/* <MessageIcon/> */}
                <p>253</p>
                
            </div>

            <div className="videoSiderbar__button">
                {/* <ShareIcon/> */}
                <p>15</p>
                
            </div>

            
        </div>
    )
}

export default VideoSidebar;
