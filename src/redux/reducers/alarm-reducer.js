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
      console.log("Entro al reducer con:", action);
      for (let i = 0; i < state.alarms.length; i++) {
        console.log("Dentro del primer for:", state);
        if (state.alarms[i].metric_id == action.metricID) {
          console.log("Entro en el primer if");
          for (let z = 0; z < state.alarms[i].triggers.length; z++) {
            console.log("Entro en el segundo for:", state);
            if (z != action.idTriggers) {
              console.log(
                "Entro al if con:",
                state.alarms[i].triggers[z],
                " y idTrigger:",
                action.idTriggers
              );
              newArray = [...newArray, state.alarms[i].triggers[z]];
              console.log("New array despues de la asignacion", newArray);
            }
          }
          newAlarms[i] = { ...state.alarms[i], triggers: newArray };
          console.log("New alarms:", newAlarms);
        } else {
          console.log("En el else:", newAlarms);
          newAlarms[i] = { ...state.alarms[i] };
        }
      }
      console.log("Antes del return", state, alarms);
      console.log("New alarms antes del return:", newAlarms);
      return { ...state, alarms: newAlarms };
    }
    default:
      return state;
  }
};
