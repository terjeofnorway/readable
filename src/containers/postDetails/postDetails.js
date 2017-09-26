import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Column, Row} from 'react-foundation';
import ContentEditable from 'react-contenteditable';

import Vote from '../../components/vote/vote';
import EditDelete from '../../components/editDelete/editDelete';
import DateTimeHelper from '../../helpers/datetime';

import './postDetails.scss';
import {addVoteScore} from "../../actions/postActions";


class PostDetails extends Component {

    constructor(props){
        super(props);

        this.handleContentChange = this.handleContentChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post === undefined) {
            nextProps.history.push('/');
        }
    }

    handleContentChange(event, origin){
        const newValue = event.target.value;

        //TOTO Fire dispatch for editorContent update (for each keystroke as component state is not allowed
    }


    render() {

        if (this.props.post) {
            const {id, title, author, timestamp, voteScore, body, category} = this.props.post;
            const {downVote, upVote} = this.props;
            const {isEditingPost} = this.props;


            return (
                <div className='PostDetails'>
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
                                    onChange={(e) => this.handleContentChange(e,'title')}/>
                            </h1>
                            </Column>
                        </Row>
                        <Row>
                            <Column small={12} large={6}><span
                                className='Header__Byline'>{author}</span>
                            </Column>
                            <Column small={12} large={6}><span
                                className='Header__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</span>
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
                                <p className='PostDetails__Body'>{body}</p>
                            </Column>
                        </Row>
                        <Row>
                            <Column small={12} large={12}>
                                <EditDelete postId={id}/>

                            </Column>
                        </Row>
                    </div>
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
        editorContent:ui.postEditor.editorContent,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        upVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
        downVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails));