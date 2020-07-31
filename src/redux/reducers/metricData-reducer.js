import { GET_METRIC_DATA } from "../constants"

const initialState = {
    metricData: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_METRIC_DATA:
            let newMetric = {...state.metricData}
            newMetric[action.id] = {...newMetric[action.id], [action.timeFrame]: action.metricData}
            return { ...state, metricData: newMetric }
        default:
            return state;
    }
}