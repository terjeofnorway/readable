import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import {Row, Column} from 'react-foundation';
import './postListItem.scss';

import DateTimeHelper from '../../helpers/datetime';
import Vote from '../vote/vote';

import {addVoteScore} from '../../actions/postActions';


const PostListItem = function (props) {
    const {id, timestamp, title, author, category, voteScore} = props.post;


    return (
        <Row className="PostListItem">
            <Column small={8} large={8}>
                <Link to={`/posts/${id}`}>
                    <div className='Header__Category'>{category}</div>
                    <div className='Header__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</div>
                    <div className='Header__Title'>{title}</div>
                    <div className='Header__Author'>{author}</div>
                </Link>
            </Column>
            <Column small={4} large={4}>
                <Vote voteScore={voteScore} id={id} upVote={props.upVote} downVote={props.downVote}></Vote>
            </Column>
        </Row>
    );
}

function mapStateToProps({}) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        upVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
        downVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostListItem);