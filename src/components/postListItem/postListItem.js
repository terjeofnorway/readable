import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Row, Column} from 'react-foundation';
import './postListItem.scss';

import DateTimeHelper from '../../helpers/datetime';
import Vote from '../vote/vote';

import {addVoteScore} from '../../actions/postActions';


const PostListItem = function (props) {
    const {timestamp, title, author} = props.post;


    return (
        //<Link to='/something'>
            <Row className="PostListItem">
                <Column small={8} large={8}>
                    <div className='PostListItem__Category'>React</div>
                    <div className='PostListItem__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</div>
                    <div className='PostListItem__Title'>{title}</div>
                    <div className='PostListItem__Author'>{author}</div>
                </Column>
                <Column small={4} large={4}>
                    <Vote post={props.post} upVote={props.upVote} downVote={props.downVote}></Vote>
                </Column>
            </Row>
        //</Link>
    );
}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        upVote:(voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
        downVote:(voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListItem);