import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        };

        this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    onChangeHandle(e) {
        this.setState({term: e.target.value})
        this.props.onSearchTermChange(this.state.term);

    }

    handeKeyUp(e){
      if(e.keyCode == 13)
        this.props.onSearchTermChange(this.state.term);
    }


    render() {
        return (
            <div className="search-bar">
                <input onChange={this.onChangeHandle} value={this.state.term}
                onKeyUp={this.handeKeyUp.bind(this)} />
            </div>
        )
    }
}
