import React from 'react';
import VideoListItem from './video_list_item.jsx'

export default class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }

    propTypes : {
        videos: React.PropTypes.array
    }

    render() {
        console.log('video-list: ', this.props.videos);
        const videoList = this.props.videos.map((video) => {
            return <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video}/>
        });
        return (
            <ul className="col-md-4 list-group">
                {videoList}
                {/* {this.renderList()} */}
                {/* <VideoListItem video={this.videoTest} /> */}
            </ul>
        )
    }
}
