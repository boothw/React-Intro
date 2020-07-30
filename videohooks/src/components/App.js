import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'

const App = () => {
    const [videos, search] = useVideos('Kaytranada Boiler Room');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {}, [videos]);
    setSelectedVideo(videos[0]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            {videos.length} Results
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;