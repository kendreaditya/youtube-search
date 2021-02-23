import React from 'react';

const VideoDetail = (videoId) => {
    console.log(videoId);
    console.log("https://www.youtube.com/embed/" +videoId.videoId);
        return(
            <div>
                <div className = "ui segment">
                    <video src = {`https://www.youtube.com/embed/${videoId.videoId}`} controls autoPlay/>
                </div>
            </div>
        );
}

export default VideoDetail;