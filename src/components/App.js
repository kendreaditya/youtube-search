import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videoList: [],
        selectedVideo: "",
    }

    youtubeSearch = async (term) => {
        const query = await youtube.get('/search', {
            params: {
              q: term
            }
        });
        console.log("successfully passed " +term +" into query");
        this.setState({
            videoList: query.data.items,
            selectedVideo: query.data.items[0].id.videoId
        });
        console.log("successfully set selected video to " +query.data.items[0].id.videoId);
        console.log("The state selectedVideo is now: " +this.state.selectedVideo);
    }

    componentDidMount = () => {
        this.youtubeSearch("Rick Roll")
    }

    render() {
        return (
            <div>
                <div className = "ui container">
                    <SearchBar 
                        onSearchSubmit = {this.youtubeSearch}
                    />
                </div>
                <div className = "ui container">
                    <VideoDetail 
                        videoId = {this.state.selectedVideo}
                    />
                </div>
            </div>
        );
    }
}

export default App;