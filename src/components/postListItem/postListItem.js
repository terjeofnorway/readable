import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row, Column} from 'react-foundation';
import './postListItem.scss';

import Vote from '../vote/vote';


class PostListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="PostListItem">
                <Column small={8} large={8}>
                    <div className='PostListItem__Category'>React</div>
                    <div className='PostListItem__Date'>2nd July 2017</div>
                    <div className='PostListItem__Title'>Lorem Ipsum dolor</div>
                    <div className='PostListItem__Author'>By John Doe</div>
                </Column>
                <Column small={4} large={4}>
                    <Vote></Vote>
                </Column>
            </Row>
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
)(PostListItem);