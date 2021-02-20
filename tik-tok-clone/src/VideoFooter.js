import React from 'react'
import './VideoFooter.css'
// copy the code to import the musicnote icon
// import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    {/* install material ui /core */}
                    {/*install material ui /icons  */}
                    {/* install react ticker  npm i react-ticker */}
                    {/* <MusicNoteIcon className="videoFooter__icon"/> */}
                    {/* <Ticker mode="smooth">
                            {({ index }) => (
                        <>
                            <p>{song}</p>
                        </>
                        )}
                    </Ticker> */}

                </div>
                
            </div>
            <img className="videoFooter__record" src="tik-tok-clone\src\Beautiful-ocean-view.png"></img>
        </div>
    )
}

export default VideoFooter;
