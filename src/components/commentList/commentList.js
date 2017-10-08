import React, {Component} from 'react';
import {connect} from 'react-redux';

import CommentListItem from '../commentListItem/commentListItem';
import Filter from '../filter/filter';

import './commentList.scss';


class CommentList extends Component {

    render() {
        return (
            <div>
                <Filter sortTarget='comment' />
                <div className="CommentList">
                    {Object.keys(this.props.comments).map((key) => <CommentListItem comment={this.props.comments[key]}
                                                                                    key={key}/>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps() {

    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);