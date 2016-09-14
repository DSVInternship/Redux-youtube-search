import React from 'react';
import SearchBar from './search_bar.jsx';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list.jsx';
import VideoDetailItem from './video_detail_item.jsx';
import _ from 'lodash';

const API_KEY = 'AIzaSyA1N6R7h7vQB_UpZSDDQIcghf1d1aWAVe4';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        }

        this.videoSearch('Ngày xưa hoàng thị');
        this.onSearchTermChange = this.onSearchTermChange.bind(this);
    }

    videoSearch(term){
      YTSearch({
          key: API_KEY,
          term: term,
      }, (videos) => {
          this.setState({
            videos,
            selectedVideo: videos[0],
          });

      })
    }

    onSearchTermChange(term){
      this.videoSearch(term);
    }

    onVideoSelect(video){
      this.setState({
        selectedVideo: video,
      })
    }
    render() {
     const VideoSearch = _.debounce(this.onSearchTermChange, 300).bind(this);
        return (
            <div className="row">
                <SearchBar onSearchTermChange={VideoSearch}/>
                <VideoDetailItem  video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect.bind(this)} videos={this.state.videos}/>
            </div>
        );
    }
}
