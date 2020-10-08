import {useState} from 'react';
import { useSelector } from 'react-redux';

import Bar from "../components/Bar";
import Content from "../components/Content";
import Header from "../components/Header";

import { getUserData, getShortName } from '../store/selectors';

const Home = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { fullName } = useSelector(getUserData);
  const shortName = useSelector(getShortName);

  const toggleIsEdit = () => {
    setIsEdit((prevEdit) => !prevEdit);
  };

  return (
    <div className="home">
      <Header name={shortName}/>
      <Bar name={fullName} isEdit={isEdit} onClick={toggleIsEdit} />
      <Content isEdit={isEdit} />
    </div>
  );
};

export default Home;
