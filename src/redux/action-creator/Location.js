import { SET_LOCATION, CHANGE_TITLE_NAVBAR } from "../constants";

export const setLocation = (url) => ({
  type: SET_LOCATION,
  url,
});

export const changeTitleNavbar = (bool) => ({
  type: CHANGE_TITLE_NAVBAR,
  bool,
});
