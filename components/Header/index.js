import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import styles from './style.module.scss';

const Header = ({ name }) => (
  <div className={styles.header}>
    <div className={styles.header_top}>
      <div className={styles.header_top_notification}>
        <NotificationsNoneIcon className={styles.notificationIcon}/>
      </div>
      <div className={styles.header_top_userInfo}>
        <div>
          <img src="person.svg" alt="person icon" className={styles.header_top_userIcon} />
        </div>
      <div className={styles.header_top_userName}>
        {name}
      </div>
      </div>
    </div>
    <div className={styles.header_bottom}>
      <div className={styles.header_title}>ЛИЧНЫЙ ПРОФИЛЬ</div>
      <div className={styles.header_subTitle}>Главная/Личный профиль</div>
    </div>
  </div>
);

export default Header;
