import React from 'react';
import {connect} from 'react-redux';
import {Column, Row} from 'react-foundation';
import './confirm.scss';


const Confirm = function (props) {
    const {visible, title, body} = props;

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
                        <button className='Confirm__Button Confirm__Button--ok'>OK</button>
                        <button className='Confirm__Button Confirm__Button--cancel'>Cancel</button>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Confirm);