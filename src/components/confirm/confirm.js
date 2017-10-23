import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { Column, Row } from 'react-foundation';
import { confirmOK, confirmCancel } from 'actions/uiActions';

import './confirm.scss';

const Confirm = props => {
  const { visible, title, body } = props;
  const {
    resolveCallback,
    rejectCallback,
    ok,
    cancel,
  } = props;

  return visible ? (
    <div className="Confirm blur">
      <div className="Confirm__Background" />
      <div className="Confirm__Container">
        <Row>
          <Column small={12} large={12}>
            <h1>{title}</h1>
            <p>{body}</p>
          </Column>
        </Row>
        <Row>
          <Column small={12} large={12}>
            <button
              className="Confirm__Button Confirm__Button--ok"
              onClick={() => {
                resolveCallback();
                ok();
            }}
            >OK
            </button>
            <button
              className="Confirm__Button Confirm__Button--cancel"
              onClick={() => {
                rejectCallback();
                cancel();
            }}
            >Cancel
            </button>
          </Column>
        </Row>
      </div>
    </div>
  ) : (<div />);
};

Confirm.propTypes = {
  visible: PT.bool.isRequired,
  title: PT.string,
  body: PT.string,
  resolveCallback: PT.func,
  rejectCallback: PT.func,
  ok: PT.func.isRequired,
  cancel: PT.func.isRequired,
};

Confirm.defaultProps = {
  resolveCallback: () => {},
  rejectCallback: () => {},
  title: '',
  body: '',
};

const mapStateToProps = ({ ui }) => ({
  visible: ui.confirm.visible,
  title: ui.confirm.title,
  body: ui.confirm.body,
  resolveCallback: ui.confirm.resolveCallback,
  rejectCallback: ui.confirm.rejectCallback,
});

const mapDispatchToProps = dispatch => ({
  ok: () => dispatch(confirmOK()),
  cancel: () => dispatch(confirmCancel()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirm);
