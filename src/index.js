import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCxcGpLJb4Ie1fCRjOTUgFNassTXGHf1WU';




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Arsenal');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); 
        });
    }

    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 800); //slowdown searching requsts

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}


// Put it on the page (in the DOM)
var container = document.querySelector('.container');
ReactDOM.render(<App/>, container);