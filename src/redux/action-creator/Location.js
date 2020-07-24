import { SET_LOCATION } from "../constants";

const location = (url) => ({
  type: SET_LOCATION,
  url,
});

export const setLocation = (url) => {
  return (dispatch) => {
    dispatch(location(url));
  };
};
