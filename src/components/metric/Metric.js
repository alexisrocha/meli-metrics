import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import Chart from "../chart/Chart";
import MLA from "../../../public/flags/MLA.png";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import "./Metric.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "23%",
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  title: {
    fontFamily: "Proxima Nova",
    fontSize: "120%",
  },
}));

//Aca abajo deberia recibir por props un array de metricas.
export default function Metric() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.small} src={MLA}></Avatar>}
        title={<Typography className={classes.title}>Buy Box - GMV</Typography>}
        action={
          <IconButton aria-label="settings">
            <CloseIcon />
          </IconButton>
        }
      />
      <div className="contenedorInfo">
        <div className="value">
          <h3>
            <strong>4.008.976</strong>
          </h3>
        </div>

        <div className="porcentaje">
          <ArrowDropUpIcon />
          20%
        </div>
      </div>
      <p className="timeLapse">YOY $188.828.348</p>
      <CardMedia>
        <Chart />
      </CardMedia>
    </Card>
  );
}
