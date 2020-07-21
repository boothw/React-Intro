import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div></div>
    }

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                {video.snippet.description}
            </div>
        </div>
    );
};


export default VideoDetail;