import React, {Component} from 'react';
import {connect} from 'react-redux';

import CommentList from '../commentList/commentList';
import CommentForm from '../commentForm/commentForm';


import './comments.scss';


class Comments extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Comments">
                <h1>Comments</h1>
                <CommentList/>
                <CommentForm/>
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
)(Comments);