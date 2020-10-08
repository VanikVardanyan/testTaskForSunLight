import { SAVEFORMDATA } from "../actionType";

const initialState = {
  fullName: 'Ваник Варданян Арменович',
  email: 'vanhappy@mail.ru',
  phone: '+79845026688',
};

const userReduser = (state = initialState, action) => {
  switch(action.type) {
    case SAVEFORMDATA: {
      return action.payload.data;
    }
    default: return state;
  }
};

export default userReduser;
