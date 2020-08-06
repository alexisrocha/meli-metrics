import { ADD_ALARM, DELETE_ALARM } from "../constants";

const inicialState = {
  alarms: [],
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case ADD_ALARM:
      let array = [];
      let indexPosition = null;
      state.alarms.map((elem, index) => {
        if (elem.metric_id == action.id) {
          console.log("Entro al if con,", index);
          indexPosition = index;
        }
      });

      if (indexPosition != null) {
        array = [...state.alarms];
        array[indexPosition].triggers = [
          ...array[indexPosition].triggers,
          action.alarm,
        ];
      } else {
        console.log("Entro al Else");
        let obj = new Object();
        obj.metric_id = action.id;
        console.log(obj);
        obj.triggers = [action.alarm];
        console.log(obj);
        array = [...state.alarms, obj];
        console.log("Array:", array);
      }

      return { ...state, alarms: array };
    case DELETE_ALARM: {
      let newArray = [];
      let newAlarms = [];
      for (let i = 0; i < state.alarms.length; i++) {
        if (state.alarms[i].metric_id == action.metricID) {
          for (let z = 0; z < state.alarms[i].length; z++) {
            if (state.alarms[i].triggers[z] != action.idTriggers) {
              newArray.push(state.alarms[i].triggers[z]);
            }
          }
          newAlarms[i] = { ...state.alarms[i], triggers: newArray };
        } else {
          newAlarms[i] == state.alarms[i];
        }
      }
      return { ...state, alarms: newAlarms };
    }
    default:
      return state;
  }
};
