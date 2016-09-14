import React from "react";

export default class VideoDetailItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.video)
            return <div>Loading</div>
        this.url = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
        console.log('url: ', this.url);
        return (
            <div className="video-detail col-lg-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={this.url} className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div>{this.props.video.snippet.title}</div>
                    <div>{this.props.video.snippet.description}</div>
                </div>
            </div>
        )
    }
}
