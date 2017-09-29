import React, {Component} from 'react';
import {connect} from 'react-redux';

import CommentListItem from '../commentListItem/commentListItem';

import './commentList.scss';


class CommentList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.comments);
        return (
            <div className="commentList">
                {Object.keys(this.props.comments).map((key) => <CommentListItem comment={this.props.comments[key]} key={key} />)}
            </div>
        );
    }
}

function mapStateToProps({comments}) {
    return {
        comments:comments,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);