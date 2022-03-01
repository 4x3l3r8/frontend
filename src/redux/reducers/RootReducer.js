import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import categoryReducer from "./CategoryReducer";


const RootReducer = combineReducers({
  userAuth: AuthReducer,
  userDetails: ProfileReducer,
  category: categoryReducer,
});

export default RootReducer;
