import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';

import Button from '../Button';

import style from './style.module.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    borderRadius: 10,
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 600,
    height: 318
  },
}));

export const SaveModal = ({ openModal, toggleModal, onConfirm }) => {
  const [dataIsSaved, setDataIsSaved] = useState(false);

  const classes = useStyles();

  const handleConirm = () => {
    setDataIsSaved(true);
    onConfirm();
  };

  const handleClose = () => {
    toggleModal();
    setDataIsSaved(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.paper}>
        {dataIsSaved ? (
          <div className={style.save}>
            <h2 className={style.saveTitle}>Данные успешно сохранены</h2>
            <Button
              text="Хорошо"
              type="button"
              onClick={handleClose}
            />
          </div>
        ) : (
          <div>
            <div className={style.btnSection}>
              <button
                type="button"
                className={style.closeBtn}
                onClick={handleClose}
              >
                <CloseIcon className={style.closeIcon}/>
              </button>
            </div>
          <div className={style.save}>
            <h2 className={style.saveTitle}>Сохранить изменения?</h2>
            <Button
              text="Сохранить"
              type="button"
              onClick={handleConirm}
            />
            <Button
              text="Не сохранять"
              type="button"
              onClick={handleClose}
              cancel
            />
              </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SaveModal;
