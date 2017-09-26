import React from 'react';
import {connect} from 'react-redux';

import {deletePost} from '../../actions/postActions';
import {toggleEditPost} from '../../actions/uiActions';

import './editDelete.scss';


const EditDelete = function (props) {

    return (
        <div className='EditDelete'>
            <button className='EditDelete__Edit' onClick={() => props.toggleEditPost(props.postId)} />
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
        toggleEditPost:(postId) => dispatch(toggleEditPost(postId)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditDelete);