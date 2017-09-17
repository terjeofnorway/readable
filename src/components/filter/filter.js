import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row, Column, Foundation} from 'react-foundation';

import {toggleSortOrder} from "../../actions/uiActions";

import './filter.scss';


const Filter = function (props) {
    const {filterLabel} = props;

    return (
        <Row>
            <Column small={12} large={12}>
                <div className='Filter' onClick={() => props.toggleSortOrder()}>
                    <div className='Filter__Button'>
                        <span className='Filter__ButtonLabel'>{filterLabel}</span>
                    </div>
                </div>
            </Column>
        </Row>
    );
}


function mapStateToProps({ui}) {
    return {
        filterLabel: ui.post_order.label,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSortOrder: () => dispatch(toggleSortOrder()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);