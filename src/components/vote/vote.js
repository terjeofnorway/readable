import React, {Component} from 'react';
import {connect} from 'react-redux';


import './vote.scss';


const Vote = () => {
    return (
        <div className="Vote">
            <button className='Vote__VoteButton--Up'></button>
            <div className='Vote__CurrentScore'>43</div>
            <button className='Vote__VoteButton--Down'></button>
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