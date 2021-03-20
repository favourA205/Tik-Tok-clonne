import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
// import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   db.collection('videos').onSnapshot(snapshot => {
  //     setVideos([snapshot.docs.map(doc => doc.data())])
  //   })
    
  // }, [])

  return (
    //BEM
    <div className="app">
      <div className='app__overlay'></div>


      <div className='app__videos'>
        {/* hard coded  format */}

        <Video
          url='https://www.tiktok.com/@ankit_dancer01/video/6781380077616778498'
          channel='heyyy'
          description='sooooo coooool'
          song='love it'
          likes={34}
          messages={677}
          shares={5}
        />
        <Video/>
        <Video/>
        <Video/>


        {/* firebase database format
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) =>(
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )} */}

      </div>

      

    </div>

  );
}

export default App;

 