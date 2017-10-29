import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { Row, Column } from 'react-foundation';
import { cycleListOrder } from 'actions/uiActions';

import './sorter.scss';

const Sorter = props => {
  const { sortBy } = props;

  return (
    <Row>
      <Column small={12} large={12}>
        <button className="Filter" onClick={() => props.toggleSortOrder(props.sortTarget)}>
          <div className="Filter__Button">
            <span className="Filter__ButtonLabel">{sortBy}</span>
          </div>
        </button>
      </Column>
    </Row>
  );
};

Sorter.propTypes = {
  sortTarget: PT.string.isRequired,
  toggleSortOrder: PT.func.isRequired,
  sortBy: PT.string.isRequired,
};

/**
 * sortTarget: Determines if the sort should affect 'comment' or 'post'.
 * sortBy: The label shown in the UI.
 */
const mapStateToProps = ({ ui }, { sortTarget }) => ({
  sortTarget,
  sortBy: ui[`${sortTarget}_order`].label,
});

const mapDispatchToProps = dispatch => ({
  toggleSortOrder: sortTarget => dispatch(cycleListOrder(sortTarget)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sorter);
