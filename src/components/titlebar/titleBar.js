import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row, Column, Foundation} from 'react-foundation';

import './titleBar.scss';


class Titlebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="Titlebar">
                <Column small={2} large={3}>
                    <button className='Titlebar__backbutton'></button>
                </Column>
                <Column small={8} large={6}>
                    <div className='Titlebar__title'>The application title</div>
                </Column>
                <Column small={2} large={3}>
                    <button className='Titlebar__menubutton'></button>
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
)(Titlebar);