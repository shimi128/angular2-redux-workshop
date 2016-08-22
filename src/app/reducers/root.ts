import {combineReducers} from 'redux';
import {listReducer}     from "./list.reducer";
import {userReducer}     from "./user.reducer";
import {appReducer} from "./app.reducer";

export const RootReducer = combineReducers({
  app: appReducer,
  list: listReducer,
  user: userReducer
});