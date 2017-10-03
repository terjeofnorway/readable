import React, {Component} from 'react';
import {connect} from 'react-redux';

import CommentList from '../commentList/commentList';


import './comments.scss';


class Comments extends Component {
    render() {
        return (
            <div className="Comments">
                <h1>Comments</h1>
                <CommentList/>
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