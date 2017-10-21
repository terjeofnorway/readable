import React, {Component} from 'react';
import {connect} from 'react-redux';

import PostForm from '../../components/postForm/postForm';


import './newPost.scss';


class NewPost extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="newPost">
                <PostForm />
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
)(NewPost);