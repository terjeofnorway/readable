import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {saveComment, deleteComment} from "actions/commentActions";
import {startEditComment, addCommentVoteScore} from 'actions/commentActions';
import EditDelete from 'components/editDelete/editDelete';
import CommentForm from 'components/commentForm/commentForm';
import Vote from 'components/vote/vote';
import './commentListItem.scss';


class CommentListItem extends Component {

    upVote = () => {

    }

    downVote = () => {

    }

    render() {
        const {id, author, timestamp, body, isEditing, voteScore} = this.props.comment;
        const {addVote} = this.props;

        const content = isEditing ?
            <CommentForm comment={this.props.comment} />
            :
            <div className='CommentListItem'>
                <h2 className='Comment__Date'>{moment(timestamp).format('ddd, MMMM Do YYYY')}</h2>
                <p className='Comment__Author'>{author}</p>
                <p className='Comment__Body'>{body}</p>
                <Vote id={id} voteScore={voteScore} addVote={addVote} />
                <EditDelete id={id} toggleEdit={id => this.props.startEditComment(id)} delete={(id) => this.props.delete(id)}/>
            </div>;

        return (
            <div>{content}</div>
        );
    }
}

function mapStateToProps({ui}) {
    return {
        activeCommentAction:ui.commentEditor.activeCommentAction,
        commentBeingEdited:ui.commentEditor.commentBeingEdited,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addVote: (voteScore, postId) => dispatch(addCommentVoteScore(voteScore, postId)),
        saveComment:(comment) => dispatch(saveComment(comment)),
        startEditComment:(id) => dispatch(startEditComment(id)),
        delete:(id) => dispatch(deleteComment(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListItem);