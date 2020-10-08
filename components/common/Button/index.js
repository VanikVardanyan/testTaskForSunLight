import React from 'react';

import style from './style.module.scss';

const Button = ({ cancel, onClick, type, text, disabled }) => (
  <button
    className={`${style.actionBtn}${cancel ? ` ${style.actionBtn__cancel}` : ''}`}
    disabled={disabled}
    type={type}
    {...(onClick && { onClick })}
  >{text}</button>
);

export default Button;
