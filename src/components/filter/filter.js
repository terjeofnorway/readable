import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row, Column, Foundation} from 'react-foundation';

import {toggleSortOrder} from "../../actions/uiActions";

import './filter.scss';


class Filter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {filterLabel} = this.props;

        return (
            <Row>
                <Column small={12} large={12}>
                    <div className='Filter' onClick={() => this.props.toggleSortOrder()}>
                        <div className='Filter__Button'>
                            <span className='Filter__ButtonLabel'>{filterLabel}</span>
                        </div>
                    </div>
                </Column>
            </Row>
        );
    }
}

function mapStateToProps({ui}) {
    return {
        filterLabel:ui.post_order.label,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSortOrder:() => dispatch(toggleSortOrder()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);