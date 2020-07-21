import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAyNCVfHwMRyCjlKzGTkoBSdnwcCPno8PY';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onFormSubmit = async (text) => {
        const response = await youtube.get("/search", {
            params: {
                q: text,
                part: "snippet",
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });

        this.setState({ videos: response.data.items });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onFormSubmit} />
                {this.state.videos.length} Results
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;