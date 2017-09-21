import React from 'react';
import {connect} from 'react-redux';
import {Column, Row} from 'react-foundation';
import './confirm.scss';
import {confirmOK, confirmCancel} from "../../actions/uiActions";


const Confirm = function (props) {
    const {visible, title, body} = props;
    const {resolveCallback, rejectCallback, ok, cancel} = props;

    return visible ? (
        <div className='Confirm blur'>
            <div className='Confirm__Background'>
            </div>
            <div className='Confirm__Container'>
                <Row>
                    <Column small={12} large={12}>
                        <h1>{title}</h1>
                        <p>{body}</p>
                    </Column>
                </Row>
                <Row>
                    <Column small={12} large={12}>
                        <button className='Confirm__Button Confirm__Button--ok' onClick={() => {resolveCallback();ok()}}>OK</button>
                        <button className='Confirm__Button Confirm__Button--cancel' onClick={() => {rejectCallback();cancel()}}>Cancel</button>
                    </Column>
                </Row>
            </div>
        </div>
    ): (<div></div>);
}

function mapStateToProps({ui}) {
    return {
        visible:ui.confirm.visible,
        title:ui.confirm.title,
        body:ui.confirm.body,
        resolveCallback:ui.confirm.resolveCallback,
        rejectCallback:ui.confirm.rejectCallback,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ok:()=>dispatch(confirmCancel()),
        cancel:()=>dispatch(confirmCancel()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Confirm);