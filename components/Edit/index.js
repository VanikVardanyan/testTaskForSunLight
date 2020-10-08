import {useState} from 'react';
import { useDispatch } from 'react-redux';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';

import CustomInput from '../common/Input/Input';
import SaveModal from '../common/Modal/Modal';
import Button from '../common/Button';

import { getFormData } from '../../store/action'
import { emailRegExp, phoneRegExp } from '../../constants';

import styles from './style.module.scss';
import { api } from '../../api';

const Edit = (props) => {
  const { email, phone, fullName } = props;

  const [openModal, setModalOpen] = useState(false);
  const [dataForm, setDataform] = useState({
    fullName: { value: fullName, isError: false },
    email: { value: email, isError: false },
    phone: { value: phone, isError: false },
  });

  const dispatch = useDispatch();

  const handleError = (value, name) => {
    switch (name) {
      case 'fullName':
        const arrName = value.split(' ');
        return arrName.length !== 3 || arrName.reduce((accumBool, namePart) => (
          namePart.length > 1 && !accumBool
            ? accumBool
            : true
        ), false);
      case 'email':
        return !emailRegExp.test(value);
      case 'phone':
        return !phoneRegExp.test(value) && !!value;
    }
  };

  const handleChange = (value, name) => {
    setDataform((prevState) => ({
      ...prevState,
      [name]: {
        value,
        isError: handleError(value, name),
      },
    }));
  };

  const checkDisabled = () => {
    const isChanged = Object.entries(props).reduce((accumBool, [key, value]) => (
      dataForm[key].value !== value && !accumBool
        ? true
        : accumBool
    ), false);

    const hasError = Object.values(dataForm).reduce((accumBool, { isError }) => (
      isError && !accumBool
        ? true
        : accumBool
    ), false);

    return !isChanged || hasError;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleToggleModdal();
  };

  const handleToggleModdal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };

  const saveData = () => {
    const normalizedData = Object.entries(dataForm).reduce((accumObj, [key, { value }]) => ({
      ...accumObj,
      [key]: value,
    }), {});
    dispatch(getFormData(normalizedData));
    api.post('', normalizedData)
  };

  return (
    <>
      <form className={styles.edit} onSubmit={handleSubmit}>
        <div className={styles.inputSection}>
          <CustomInput
            Icon={AssignmentIndIcon}
            placheholder="ФИО"
            label="ФИО"
            defaultValue = {fullName}
            errorMessage="Вы неверно указали имя"
            isError = {dataForm.fullName.isError}
            name="fullName"
            onChange={handleChange}
            required
          />
          <div className={styles.border}/>
          <CustomInput
            Icon={AlternateEmailIcon}
            placheholder="E-mail"
            label="E-mail"
            defaultValue={email}
            errorMessage="Вы неверно указали email"
            isError = {dataForm.email.isError}
            name="email"
            onChange={handleChange}
            required
          />
          <div className={styles.border}/>
          <CustomInput
            Icon={PhoneSharpIcon}
            placheholder="Номер телефона"
            label="Номер телефона"
            defaultValue={phone}
            errorMessage="Вы неверно указали номер"
            isError = {dataForm.phone.isError}
            name="phone"
            onChange={handleChange}
            required={false}
          />
        </div>
        <div className={styles.actionSection}>
          <Button
            disabled={checkDisabled()}
            text="Сохранить изменения"
            type="submit"
          />
        </div>
      </form>
      <SaveModal
        className={styles.actionBtn}
        disabled={checkDisabled()}
        openModal={openModal}
        toggleModal={handleToggleModdal}
        onConfirm={saveData}
      />
    </>
  );
};

export default Edit;
