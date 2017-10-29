import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import { closeDrawer } from 'actions/uiActions';

import './drawerCategoryListItem.scss';

const DrawerCategoryListItem = props => {
  const { path, name } = props.item;

  return (
    <li className="CategoryListItem">
      <Link to={`/${path}`} onClick={props.closeDrawer}>
        <div className="Category__Name">{name}</div>
      </Link>
    </li>
  );
};

DrawerCategoryListItem.propTypes = {
  item: PT.shape({
    path: PT.string.isRequired,
    name: PT.string.isRequired,
  }).isRequired,
  closeDrawer: PT.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerCategoryListItem);
