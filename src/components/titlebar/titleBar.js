import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { Row, Column } from 'react-foundation';
import { withRouter } from 'react-router-dom';

import { showDrawer } from 'actions/uiActions';

import './titleBar.scss';

const Titlebar = props => {
  const title = props.title ? props.title : 'Readable app';

  const backButton = props.location.pathname !== '/' ?
    <button className="Titlebar__Backbutton" onClick={() => props.history.push('/')} />
    :
    '';

  return (
    <Row className="TitleBar">
      <Column small={2} large={3}>
        {backButton}
      </Column>
      <Column small={8} large={6}>
        <div className="Titlebar__Title">{title}</div>
      </Column>
      <Column small={2} large={3}>
        <button className="Titlebar__Menubutton" onClick={props.showDrawer} />
      </Column>
    </Row>
  );
};

Titlebar.propTypes = {
  title: PT.string,
  history: PT.shape({ push: PT.func.isRequired }).isRequired,
  location: PT.shape({ pathname: PT.string.isRequired }).isRequired,
  showDrawer: PT.func.isRequired,
};

Titlebar.defaultProps = {
  title: '',
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  showDrawer: () => dispatch(showDrawer()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Titlebar));
