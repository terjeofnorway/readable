import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row, Column, Foundation} from 'react-foundation';
import {deletePost} from '../../actions/postActions';

import './editDelete.scss';


const EditDelete = function (props) {

    return (
        <div className='EditDelete'>
            <button className='EditDelete__Edit' />
            <button className='EditDelete__Delete' onClick={() =>props.deletePost(props.postId)} />
        </div>
    );
}


function mapStateToProps({}) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        deletePost:(postId) => dispatch(deletePost(postId)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditDelete);