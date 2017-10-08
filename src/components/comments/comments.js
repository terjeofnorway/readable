import React, {Component} from 'react';
import {connect} from 'react-redux';

import CommentList from '../commentList/commentList';


import './comments.scss';


class Comments extends Component {
    render() {
        return (
            <div className="Comments">
                <h1>Comments</h1>
                <CommentList comments={this.props.comments}/>
            </div>
        );
    }
}

function mapStateToProps({ ui, comments }) {
    const orderByCommentsKey = ui.comment_order.post_object_key;

    const commentsArray = Object
        .keys(comments)
        .map(key => comments[key])
        .filter(item => !item.deleted);

    const sortedComments = commentsArray.sort((a,b) => a[orderByCommentsKey] < b[orderByCommentsKey]);

    return {
        comments: sortedComments,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);