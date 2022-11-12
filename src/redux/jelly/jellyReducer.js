import { BUY_JELLY } from "./jellyTypes";

const initialState = {
  numOfJelly: 10,
};

const JellyReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JELLY:
      return { ...state, numOfJelly: state.numOfJelly - 1 };

    default:
      return state;
  }
};
export default JellyReducer;
