import React from 'react';
import { useSelector } from 'react-redux';

import Edit from '../Edit';
import Information from '../Information';

import { getUserData } from '../../store/selectors';

import styles from './style.module.scss';

const Content = ({ isEdit }) => {
  const { email, fullName, phone } = useSelector(getUserData)

  return (
    <div className={styles.content}>
      {
        isEdit ? 
          <Edit email={email} phone={phone} fullName={fullName} /> :
          <Information email={email} phone={phone} />
      }
    </div>
  );
};

export default Content;
