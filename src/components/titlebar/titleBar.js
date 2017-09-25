import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Column} from 'react-foundation';
import {withRouter} from 'react-router-dom';

import {showDrawer} from "../../actions/uiActions";

import './titleBar.scss';


class Titlebar extends Component {

    render() {

        const {showDrawer} = this.props;

        return (
            <Row className="Titlebar">
                <Column small={2} large={3}>
                    <button className='Titlebar__Backbutton' onClick={this.props.history.goBack}></button>
                </Column>
                <Column small={8} large={6}>
                    <div className='Titlebar__Title'>The application title</div>
                </Column>
                <Column small={2} large={3}>
                    <button className='Titlebar__Menubutton' onClick={showDrawer}></button>
                </Column>
            </Row>
        );
    }

}

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        showDrawer:() => dispatch(showDrawer()),

    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Titlebar));