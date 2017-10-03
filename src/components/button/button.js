import React from 'react';
import {connect} from 'react-redux';


import './button.scss';


const Button = (props) => (
    <button className="Button Button--Wide" onClick={props.onClick}>
        {props.children}
    </button>
);

function mapStateToProps({}) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);