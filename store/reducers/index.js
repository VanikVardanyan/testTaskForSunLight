import { combineReducers } from "redux";

import userReduser from './UserReducer';

const rootReducer = combineReducers({
    user: userReduser,
});

export default rootReducer;
