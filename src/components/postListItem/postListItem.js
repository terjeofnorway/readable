import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import {Row, Column} from 'react-foundation';
import './postListItem.scss';

import DateTimeHelper from '../../helpers/datetime';
import Vote from '../vote/vote';

import {addPostVoteScore} from '../../actions/postActions';


const PostListItem = function (props) {
    const {id, timestamp, title, author, category, voteScore} = props.post;

    return (
        <Row className="PostListItem">
            <Column small={8} large={8}>
                <Link to={`/posts/${id}`}>
                    <div className='PostListItem__Category'>{category}</div>
                    <div className='PostListItem__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</div>
                    <div className='PostListItem__Title'>{title}</div>
                    <div className='PostListItem__Author'>{author}</div>
                </Link>
            </Column>
            <Column small={4} large={4}>
                <Vote voteScore={voteScore} id={id} addVote={props.addVote} ></Vote>
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
        addVote: (voteScore, postId) => dispatch(addPostVoteScore(voteScore, postId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostListItem);