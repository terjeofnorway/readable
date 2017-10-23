import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { Row, Column } from 'react-foundation';
import { toggleSortOrder } from 'actions/uiActions';

import './filter.scss';

const Filter = props => {
  const { filterLabel } = props;

  return (
    <Row>
      <Column small={12} large={12}>
        <button className="Filter" onClick={() => props.toggleSortOrder(props.sortTarget)}>
          <div className="Filter__Button">
            <span className="Filter__ButtonLabel">{filterLabel}</span>
          </div>
        </button>
      </Column>
    </Row>
  );
};

Filter.propTypes = {
  sortTarget: PT.string.isRequired,
  toggleSortOrder: PT.func.isRequired,
  filterLabel: PT.string.isRequired,
};

const mapStateToProps = ({ ui }, { sortTarget }) => ({
  sortTarget,
  filterLabel: ui[`${sortTarget}_order`].label,
});

const mapDispatchToProps = dispatch => ({
  toggleSortOrder: sortTarget => dispatch(toggleSortOrder(sortTarget)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
