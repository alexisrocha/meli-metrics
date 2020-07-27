import { SET_LOCATION, CHANGE_TITLE_NAVBAR } from "../constants";

const location = (url) => ({
  type: SET_LOCATION,
  url,
});

const changeNavbar = (bool) => ({
  type: CHANGE_TITLE_NAVBAR,
  bool,
});

export const setLocation = (url) => {
  return (dispatch) => {
    dispatch(location(url));
  };
};

export const changeTitleNavbar = (bool) => {
  return (dispatch) => {
    dispatch(changeNavbar(bool));
  };
};
