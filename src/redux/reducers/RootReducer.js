import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import categoryReducer from "./CategoryReducer";
import tagReducer from "./TagReducer";


const RootReducer = combineReducers({
  userAuth: AuthReducer,
  userDetails: ProfileReducer,
  category: categoryReducer,
  tag: tagReducer
});

export default RootReducer;
