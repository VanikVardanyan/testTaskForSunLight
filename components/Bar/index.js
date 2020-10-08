import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';

import styles from './style.module.scss';

const Bar = ({ isEdit, onClick, name }) => (
  <div className={styles.bar}>
    <div className={styles.bar_info}>
      <div className={styles.bar_info_iconSection}>
        <img src="person.svg" alt="person icon" className={styles.bar_info_icon} />
      </div>
      <div className={styles.bar_info_fullname}>
        {name}
      </div>
    </div>
    <button
      type="button"
      className={styles.action_section}
      onClick={onClick}
    >{isEdit ? 
      (<>
        <div className={styles.action_text}>Закрыть</div>
        <div>
          <CloseIcon className={styles.action_section_icon} />
        </div>
      </>) :(
      <>
        <div className={styles.action_text}>РЕДАКТИРОВАТЬ</div>
        <div>
          <CreateIcon className={styles.action_section_icon} />
        </div>
      </>)}
    </button>
  </div>
);

export default Bar;
