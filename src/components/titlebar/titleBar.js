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
      <Column small={2} large={3} className="Backbutton__Column">
        {backButton}
      </Column>
      <Column small={8} large={6} className="Titlebar__Column">
        <div className="Titlebar__Title">{title}</div>
      </Column>
      <Column small={2} large={3} className="Menubutton__Column">
        <div className="Titlebar__Menubutton">
          <button className="Menubutton__Clickable" onClick={props.showDrawer} />
        </div>
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
