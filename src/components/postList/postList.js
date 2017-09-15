import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListItem from '../postListItem/postListItem';

import './postList.scss';


class PostList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="PostList__Container">
                <PostListItem></PostListItem>
                <PostListItem></PostListItem>
                <PostListItem></PostListItem>
                <PostListItem></PostListItem>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);