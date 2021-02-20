import React, { useState, useRef } from 'react';
import './Video.css';
import VideoFooter from'./VideoFooter';
import VideoSidebar from'./VideoSidebar';


function Video() {
    const [playing, setPlaying] =useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing){
        videoRef.current.pause();
        setPlaying(false);
        } else{
          videoRef.current.play();
          setPlaying(true);
        }
    };


    return (
        <div className="video">
            <video 
                className="video__player" 
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src=""
                ></video>

            <VideoFooter 
                channel="favouragbejule" 
                description="check out this dance move, roll with it!" 
                song="Harry styles-golden"
            />
            {/* <VideoFooter/> */}
            
            <VideoSidebar/>
            {/* <VideoSidebar/> */}
        </div>
    )
}

export default Video;
