import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Column} from 'react-foundation';

import DateTimeHelper from '../../helpers/datetime.js';

import './commentListItem.scss';


class CommentListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {author, timestamp, body} = this.props.comment;
        return (
            <div className="CommentListItem">
                <Row>
                    <Column small={12} large={12}>
                        <h2 className='Comment__Date'>{DateTimeHelper.timestampToHumanDate(timestamp)}</h2>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <span className='Comment__Author'>{author}</span>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <p className='Comment__Body'>{body}</p>
                    </Column>
                </Row>
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
)(CommentListItem);