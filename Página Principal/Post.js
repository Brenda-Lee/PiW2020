import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.sender = props.sender;
        this.message = props.message;

    }
    render() { 
        return ( 
            <div> {this.sender} {this.message} </div>
        );
    }
}

export default Post;