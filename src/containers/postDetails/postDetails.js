import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Column, Row} from 'react-foundation';
import ContentEditable from 'react-contenteditable';

import Vote from '../../components/vote/vote';
import EditDelete from '../../components/editDelete/editDelete';
import CommentList from '../../components/commentList/commentList';
import DateTimeHelper from '../../helpers/datetime';

import './postDetails.scss';
import {addVoteScore} from '../../actions/postActions';
import {updateEditorContent} from '../../actions/uiActions';
import {loadComments} from "../../actions/commentActions";


class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post === undefined) {
            nextProps.history.push('/');
        }

        //As new comments may have been added, make a new request to the server. Meanwhile,
        //the render method will load the old posts.
        console.log('componentWillReceiveProps');
        //nextProps.post && this.props.loadComments(nextProps.post.id);
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }



    handleContentChange(event, field) {
        const newValue = event.target.value;
        this.props.updateEditorContent(newValue,field);
    }

    render() {
        if (this.props.post) {
            const {id, title, author, timestamp, voteScore, body, category} = this.props.post;
            const {downVote, upVote} = this.props;
            const {isEditingPost} = this.props;

            const postBaseClassName = isEditingPost ? 'PostDetails--editing' : 'PostDetails';


            return (
                <div className={postBaseClassName}>
                    <div className='PostDetails_Header'>
                        <Row>
                            <Column small={12} large={12}><span className='Header__Category'>{category}</span></Column>
                        </Row>
                        <Row>
                            <Column small={12} large={12}><h1
                                className='Header__Title'>
                                <ContentEditable
                                    html={title}
                                    disabled={!isEditingPost}
                                    onChange={(e) => this.handleContentChange(e, 'title')} />
                            </h1>
                            </Column>
                        </Row>
                        <Row>
                            <Column small={12} large={6}>
                                <span className='Header__Author'>
                                    <ContentEditable
                                        html={author}
                                        disabled={!isEditingPost}
                                        onChange={(e) => this.handleContentChange(e, 'author')} />
                                </span>
                            </Column>
                            <Column small={12} large={6}><span
                                className='Header__Date'>
                                <ContentEditable
                                    html={DateTimeHelper.timestampToHumanDate(timestamp)}
                                    disabled={!isEditingPost}
                                    onChange={(e) => this.handleContentChange(e, 'date')} />
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
                                    <ContentEditable
                                        html={body}
                                        disabled={!isEditingPost}
                                        onChange={(e) => this.handleContentChange(e, 'body')} />
                                </div>
                            </Column>
                        </Row>
                        <Row>
                            <Column small={12} large={12}>
                                <EditDelete postId={id}/>

                            </Column>
                        </Row>
                    </div>
                    <CommentList/>

                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
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
        updateEditorContent: (content,field) => dispatch(updateEditorContent(content,field)),
        //loadComments:(postId) => dispatch(loadComments(postId)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails));