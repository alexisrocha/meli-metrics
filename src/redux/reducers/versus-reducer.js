import {
  ADD_NAME,
  DELETE_NAME,
  CHART_TO_VERSUS,
  ADD_CHART_TO_VERSUS,
  DELETE_ROW,
} from "../constants";

const initialState = {
  selectedCountries: [],
  chartVersus: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        selectedCountries: [...state.selectedCountries, action.name],
        chartVersus: action.newList,
      };
    case DELETE_NAME:
      let selectedCountries2 = state.selectedCountries.filter(
        (elem) => elem != action.name
      );
      return {
        ...state,
        selectedCountries: selectedCountries2,
        chartVersus: action.newList,
      };
    case CHART_TO_VERSUS:
      return {
        ...state,
        selectedCountries: action.listFlag,
        chartVersus: action.list,
      };
    case ADD_CHART_TO_VERSUS:
      let newList = [];
      if (
        state.chartVersus.filter((x) => x.metric_id == action.metric.metric_id)
          .length == 0
      ) {
        for (let i = 0; i < state.selectedCountries.length; i++) {
          let newMetric = {
            ...action.metric,
            site: state.selectedCountries[i],
          };
          newMetric.dimension.site = state.selectedCountries[i];
          newList.push(newMetric);
        }
      }
      return { ...state, chartVersus: [...state.chartVersus, ...newList] };
    case DELETE_ROW:
      let deleteRowList = state.chartVersus.filter(
        (x) => x.metric_id != action.metricID
      );
      return { ...state, chartVersus: deleteRowList };
    default:
      return state;
  }
};
