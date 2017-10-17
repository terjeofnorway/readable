import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Column, Row} from 'react-foundation';

import Vote from '../../components/vote/vote';
import EditDelete from '../../components/editDelete/editDelete';
import Comments from '../../components/comments/comments';
import DateTimeHelper from '../../helpers/datetime';

import './postDetails.scss';
import {addVoteScore} from '../../actions/postActions';
import {updatePostEditorContent} from '../../actions/uiActions';
import {loadComments} from "../../actions/commentActions";
import PostForm from '../../components/postForm/postForm';

import {deletePost, startEditPost} from '../../actions/postActions';

const PostBody = (props) => {
    const {id, title, author, timestamp, voteScore, body, category} = props.post;
    const {downVote, upVote} = props;

    return (
        <div className='PostDetails'>
            <div className='PostDetails_Header'>
                <Row>
                    <Column small={12} large={12}><span className='Header__Category'>{category}</span></Column>
                </Row>
                <Row>
                    <Column small={12} large={12}><h1
                        className='Header__Title'>
                        {title}
                    </h1>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={6}>
                                <span className='Header__Author'>
                                    {author}
                                </span>
                    </Column>
                    <Column small={12} large={6}><span
                        className='Header__Date'>
                                {DateTimeHelper.timestampToHumanDate(timestamp)}
                                </span>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}><Vote id={id} voteScore={voteScore} upVote={upVote}
                                                        downVote={downVote}></Vote>
                    </Column>
                </Row>
            </div>
            <div className='PostDetails__Content'>
                <Row>
                    <Column small={12} large={12}>
                        <div className='PostDetails__Body'>
                            {body}
                        </div>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <EditDelete id={id} toggleEdit={id => props.startEditPost(id)} delete={id => props.deletePost(id)} />
                    </Column>
                </Row>
            </div>
            <Comments parentId={id} />
        </div>
    )
}


class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post === undefined) {
            nextProps.history.push('/');
        }
    }

    handleContentChange(event, field) {
        const newValue = event.target.value;
        this.props.updatePostEditorContent(newValue,field);
    }

    componentDidMount(){
        this.props.loadComments(this.props.id);
    }

    render() {
        const {post} = this.props;

        return(post && !post.isEditing ? (PostBody(this.props)) : (<PostForm post={this.props.post} />));
    }
}


function mapStateToProps({posts, categories, ui}, {id}) {
    return {
        post: posts[id],
        isEditingPost: ui.postEditor.isEditingPost,
        editorContent: ui.postEditor.editorContent,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        upVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
        downVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
        loadComments:(postId) => dispatch(loadComments(postId)),
        deletePost:(postId) => dispatch(deletePost(postId)),
        startEditPost:(postId) => dispatch(startEditPost(postId)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails));