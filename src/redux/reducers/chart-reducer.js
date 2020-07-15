import { GET_CHART, DELETE_CHART, SELECTED_CHART } from "../constants";

const initialState = {
  charts: [],
  selectedChart: [],
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
    default:
      return state;
  }
};
