import React from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

import styles from './style.module.scss';

const Information = ({ email, phone }) => (
  <div className={styles.information}>
    <div className={styles.information_item}>
      <div className={styles.information_item_iconSection}>
        <AlternateEmailIcon className={styles.information_item_icon} />
      </div>
      <div className={styles.information_item_text}>
        {email}
      </div>
    </div>
    <div className={styles.information_border} />
    <div className={styles.information_item}>
      <div className={styles.information_item_iconSection}>
        < PhoneIcon className={styles.information_item_icon} />
      </div>
      <div className={styles.information_item_text}>
        {phone}
      </div>
    </div>
  </div>
);

export default Information;
