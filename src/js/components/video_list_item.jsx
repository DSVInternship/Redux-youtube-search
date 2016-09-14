import React from 'react';

export default class VideoListItem extends React.Component {

    constructor(props) {
        super(props);
        this.imageURL = this.props.video.snippet.thumbnails.default.url;
    }
    propsTypes : {
        video: React.PropTypes.object
    }

    handleItemClick(){
      this.props.onVideoSelect(this.props.video);
    }

    render() {
        if (!this.props.video)
            return (
                <div>Loading</div>
            )
        return (
            <li key={this.props.key} className="list-group-item" onClick={this.handleItemClick.bind(this)}>
                <div className="video-list-meida">
                    <div className="media-left">
                        <img src={this.imageURL} alt="" className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.props.video.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}
