import actionType from "../action";
const UpdateFlag = (flag) => {
  return {
    type: actionType.UPDATEFLAG,
    flag: flag,
  };
};
export { UpdateFlag };
