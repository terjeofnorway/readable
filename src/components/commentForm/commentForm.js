import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Column, Row} from 'react-foundation';
import Button from '../../components/button/button';


import './commentForm.scss';


class CommentForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='CommentForm'>
                <Row>
                    <Column small={12} large={12}>
                        <div contentEditable='true' className='Comments__Author' ></div>
                    </Column>
                    <Column small={12} large={12}>
                        <div contentEditable='true' className='Comments__Body'></div>
                    </Column>
                    <Column small={12} large={12}>
                        <Button>Add comment</Button>
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
)(CommentForm);