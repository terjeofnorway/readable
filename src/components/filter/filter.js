import React from 'react';
import {connect} from 'react-redux';

import {Row, Column} from 'react-foundation';

import {toggleSortOrder} from "actions/uiActions";

import './filter.scss';


const Filter = function (props) {
    const {filterLabel} = props;

    return (
        <Row>
            <Column small={12} large={12}>
                <div className='Filter' onClick={() => props.toggleSortOrder(props.sortTarget)}>
                    <div className='Filter__Button'>
                        <span className='Filter__ButtonLabel'>{filterLabel}</span>
                    </div>
                </div>
            </Column>
        </Row>
    );
}


function mapStateToProps({ui},{sortTarget}) {
    return {
        sortTarget,
        filterLabel: ui[`${sortTarget}_order`].label,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSortOrder: (sortTarget) => dispatch(toggleSortOrder(sortTarget)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);