import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import JellyReducer from "./jelly/jellyReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  jelly: JellyReducer,
});
export default rootReducer;
