import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CommentListItem from 'components/commentListItem/commentListItem';
import CommentForm from 'components/commentForm/commentForm';
import Filter from 'components/filter/filter';

import './commentList.scss';


class CommentList extends Component {

    render() {
        console.log(this.props.history);
        return (
            <div>
                <Filter sortTarget='comment' />
                <div className="CommentList">
                    {Object.keys(this.props.comments).map((key) => <CommentListItem comment={this.props.comments[key]}
                                                                                    key={key}/>)}
                    <CommentForm parentId={22}/>
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList));