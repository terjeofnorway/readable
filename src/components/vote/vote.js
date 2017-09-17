import React, {Component} from 'react';
import {connect} from 'react-redux';


import './vote.scss';


const Vote = (props) => {
    const {voteScore, id} = props;
    return (
        <div className="Vote">
            <button className='Vote__VoteButton--Up' onClick={() => props.upVote(1,id)}></button>
            <div className='Vote__CurrentScore'>{ voteScore }</div>
            <button className='Vote__VoteButton--Down' onClick={() => props.upVote(-1,id)}></button>
        </div>
    );
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
)(Vote);