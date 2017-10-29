import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import DrawerCategories from 'components/drawerCategories/drawerCategories';

import { closeDrawer } from 'actions/uiActions';

import './drawer.scss';

const Drawer = props => {
  const { visible } = props.drawer;

  // Controlls wether the drawer is visible or hidden.
  const mainClassName = visible ? 'Drawer' : 'Drawer Drawer--Collapsed';

  return (
    <div className={mainClassName}>
      <div className="Drawer__Background" />
      <div className="Drawer__Container">
        <button className="Drawer__CloseButton" onClick={props.closeDrawer} />
        <DrawerCategories />
      </div>
    </div>
  );
};

Drawer.propTypes = {
  closeDrawer: PT.func.isRequired,
  drawer: PT.shape({ visible: PT.bool.isRequired }).isRequired,
};

const mapStateToProps = ({ ui }) => ({
  drawer: ui.drawer,
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawer);
