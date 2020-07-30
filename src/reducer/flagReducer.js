import actionType from "../action";
const flagReducer = (state = { flag: false }, action) => {
  switch (action.type) {
    case actionType.UPDATEFLAG:
      return {
        flag: action.flag,
      };
  }
  return state;
};
export default flagReducer;
