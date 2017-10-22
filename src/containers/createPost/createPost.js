import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PostForm from '../../components/postForm/postForm';
import {savePost} from '../../actions/postActions';

import './createPost.scss';

const uuid = require('uuid/v4');

class CreatePost extends Component {
    static POST_TEMPLATE = {id:uuid(), author:'',timestamp:Date.now(),body:'',deleted:false,title:'',voteScore:0, isEditing:false};

    componentWillMount(){

    }

    savePost = post => {
        this.props.savePost(post);
        if(this.props.match.params.id !== post.id){
            console.log(`/posts/${post.id}`);
            this.props.history.push(`/posts/${post.id}`);
        }
    }


    render() {
        const post = {...CreatePost.POST_TEMPLATE}
        return (
            <div className="CreatePost">
                <PostForm post={post} savePost={this.savePost} />
            </div>
        );
    }
}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        savePost:(post) => dispatch(savePost(post))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost));