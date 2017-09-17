import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Column, Row} from 'react-foundation';

import Vote from '../../components/vote/vote';

import './postDetails.scss';
import {addVoteScore} from "../../actions/postActions";


class PostDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.post) {
            const {id, title, author, timestamp, voteScore, body, category} = this.props.post;


            return (
                <div className='PostDetails'>
                    <div className='PostDetails_Header'>
                        <Row>
                            <Column small={12} large={12}><span className='Header__Category'>{category}</span></Column>
                        </Row>
                        <Row>
                            <Column small={12} large={12}><h1
                                className='Header__Title'>{title}</h1></Column>
                        </Row>
                        <Row>
                            <Column small={12} large={6}><span
                                className='Header__Byline'>{author}</span></Column>
                            <Column small={12} large={6}><span
                                className='Header__Date'>{timestamp}</span></Column>
                        </Row>
                        <Row>
                            <Column small={12} large={12}><Vote id={id} voteScore={voteScore} upVote={this.props.upVote}
                                                                downVote={this.props.downVote}></Vote></Column>
                        </Row>
                        <Row>
                            <Column small={12} large={12}>{body}</Column>
                        </Row>
                        <Row>
                            <Column small={12} large={12}>Edit and delete</Column>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        upVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
        downVote: (voteScore, postId) => dispatch(addVoteScore(voteScore, postId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails);