import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import Alarm from "../alarm/Alarm"
import "./Alarms.scss";

let list =[{
  metric_id: 1,
  triggers: [
      {
        trigger_type: "comparison",
        config: {
          dimension: {
            site: "MLA",
            subgroup: "All site"
          },
          comparison_operator: "gt",
          value: 0,
          period: {
            period_code: 0,
            period_desc: "D-1 vs D-1 LY"
          },
          type: "percentage"
        }
      },
      {
        trigger_type: "target",
        config: {
          dimension: {
            site: "MLA",
            subgroup: "All site"
          },
          comparison_operator: "gt",
          value: 600000
        }
      }
    ]
},{
  metric_id: 2,
  triggers: [
      {
        trigger_type: "comparison",
        config: {
          dimension: {
            site: "MLB",
            subgroup: "All site"
          },
          comparison_operator: "gt",
          value: 0,
          period: {
            period_code: 0,
            period_desc: "D-1 vs D-1 LY"
          },
          type: "percentage"
        }
      },
      {
        trigger_type: "target",
        config: {
          dimension: {
            site: "MLA",
            subgroup: "All site"
          },
          comparison_operator: "gt",
          value: 600000
        }
      }
    ]
}]

export default function Alarms() {
  const metric = useSelector((store) => store.metric.metric);
  return (
    <div id="alarms" className="container">
      {metric && list.map(alarm=><Alarm metricId={alarm.metric_id} triggers={alarm.triggers}/>)}
    </div>
  )
}
