import React from 'react';
import PT from 'prop-types';

import './button.scss';

const Button = props => (
  <button className="Button Button--Wide" onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PT.node.isRequired,
  onClick: PT.func.isRequired,
};

export default Button;
