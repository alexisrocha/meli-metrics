import {
  GET_CHART,
  DELETE_CHART,
  SELECTED_CHART,
  SET_TITLE,
  ADD_METRIC,
} from "../constants";

const initialState = {
  charts: [],
  selectedChart: [],
  title: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHART:
      return { ...state, charts: [...state.charts, action.charts] };
    case SELECTED_CHART:
      return { ...state, selectedChart: action.selectedChart };
    case DELETE_CHART:
      return {
        ...state,
        selectedChart: state.selectedChart.filter(
          (x) => x.metric_id != action.id
        ),
      };
    case SET_TITLE:
      return { ...state, title: action.title };
    case ADD_METRIC:
      return {...state, selectedChart: [...state.selectedChart, action.metric]}
    default:
      return state;
  }
};
