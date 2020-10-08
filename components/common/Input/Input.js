import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';

import styles from './style.module.scss';

const CustomInput = ({
  Icon, placheholder, label, errorMessage,
  defaultValue, isError, onChange, name, required,
}) => (
  <div className={styles.customInput}>
    <div className={styles.customInput_iconSection}>
      <Icon className={styles.customInput_icon}/>
    </div>
    <TextField
      error = {isError}
      id="outlined-error-helper-text"
      required={required}
      label={label}
      defaultValue={defaultValue}
      helperText={isError ? errorMessage : ''}
      variant="outlined"
      placeholder={placheholder}
      style={{width: '246px'}}
      onChange={(e) => onChange(e.target.value, name)}
    />
  </div>
);

export default memo(CustomInput);
