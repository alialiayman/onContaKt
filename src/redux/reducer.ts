import { combineReducers } from 'redux';
import recordsManagerReducer from "../features/shared/RecordsManager/redux/recordsManagerReducer";
import loginReducer from '../features/SignIn/redux/reducer';

const rootReducer = combineReducers({ auth: loginReducer, recordsManager: recordsManagerReducer });

export default rootReducer;