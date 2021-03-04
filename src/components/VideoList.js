import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
    const renderedList = videos.map(video => {
        return (
            <div className = "ui relaxed divided list">
                <VideoItem 
                    video = {video}
                    onVideoSelected = {video}
                />
            </div>
        )
    })
}

export default VideoList;