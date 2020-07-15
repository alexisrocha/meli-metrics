import React, { useEffect } from "react";
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
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import Chart from "../chart/Chart";
import MLA from "../../../public/flags/MLA.png";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SettingsIcon from "@material-ui/icons/Settings";
import GetAppIcon from "@material-ui/icons/GetApp";
import InfoIcon from "@material-ui/icons/Info";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { deleteCharts } from "../../redux/action-creator/Charts";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetric } from "../../redux/action-creator/Metrics";
import { fetchMetricData } from "../../redux/action-creator/MetricData";
import "./Metric.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
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
    fontSize: "100%",
  },
  item: {
    fontSize: "1.2em",
    color: "gray",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  header: {
    padding: "16px 16px 0px 16px",
  },
}));

//Aca abajo deberia recibir por props un array de metricas.
export default function Metric({ idMetrica, chart }) {
  const classes = useStyles();
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openCard, setOpenCard] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);
  const metric = useSelector((store) => store.metric.metric[idMetrica]);
  const metricData = useSelector(
    (store) => store.metricData.metricData[idMetrica]
  );
  const dispatch = useDispatch();
  const deleteCard = () => {
    setOpenCard(true);
  };

  const handleClickOpenSettings = () => {
    setOpenSetting(true);
  };

  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const handleCloseSettings = () => {
    setOpenSetting(false);
  };

  const handleCloseCard = () => {
    setOpenCard(false);
  };

  const sumArr = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };

  const dif = (arr, arr2) => {
    return sumArr(arr) - sumArr(arr2);
  };

  const percentage = (arr, arr2) => {
    return ((sumArr(arr) / sumArr(arr2) - 1) * 100).toFixed(2);
  };

  useEffect(() => {
    dispatch(fetchMetric(idMetrica));
    dispatch(fetchMetricData(idMetrica));
  }, [idMetrica]);
  if (metricData) {
    console.log("suma---->", sumArr(metricData.data[0].data));
    console.log("suma2---->", sumArr(metricData.data[1].data));
  }
  return (
    <Card className="cardMain">
      <CardHeader
        className={classes.header}
        avatar={<Avatar className={classes.small} src={MLA}></Avatar>}
        title={
          <Typography className={classes.title}>
            <b>{metric ? metric.display_name : ""}</b>
          </Typography>
        }
        action={
          <IconButton aria-label="settings" onClick={deleteCard}>
            <CloseIcon />
          </IconButton>
        }
      />
      <div className="contenedorInfo">
        <div className="value" style={{ marginTop: "10px" }}>
          <h3>
            <strong>
              {metricData
                ? metricData.data[0].data[metricData.data[0].data.length - 1]
                : 0}
            </strong>
          </h3>
        </div>

        {metricData ? (
          <>
            {percentage(metricData.data[0].data, metricData.data[1].data) >
            0 ? (
              <div className="positive porcentaje">
                <ArrowDropUpIcon />
                {metricData
                  ? percentage(
                      metricData.data[0].data,
                      metricData.data[1].data
                    ) + "%"
                  : 0}
              </div>
            ) : (
              <div className="negative porcentaje">
                <ArrowDropDownIcon />
                {metricData
                  ? percentage(
                      metricData.data[0].data,
                      metricData.data[1].data
                    ) + "%"
                  : 0}
              </div>
            )}
          </>
        ) : (
          0
        )}
      </div>

      <p className="timeLapse">
        YOY:$
        {metricData ? dif(metricData.data[0].data, metricData.data[1].data) : 0}
      </p>
      <CardMedia>
        {metricData ? <Chart metricData={metricData} /> : null}
        <div className="buttonContainer">
          <div className="button" onClick={handleClickOpenInfo}>
            <div className="buttonItem">
              <InfoIcon className={classes.item} />
            </div>
          </div>

          <div className="button" onClick={handleClickOpenSettings}>
            <div className="buttonItem">
              <SettingsIcon className={classes.item} />
            </div>
          </div>

          <div className="button">
            <div className="buttonItem">
              <GetAppIcon className={classes.item} />
            </div>
          </div>
        </div>
      </CardMedia>

      {/*Dialog for DeleteCard*/}
      <Dialog
        open={openCard}
        TransitionComponent={Transition}
        onClose={handleCloseCard}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Delete Card</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Estas seguro que deseas eliminar esta tarjeta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCard} color="primary">
            No
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteCharts(idMetrica));
              handleCloseCard();
            }}
            color="primary"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/*Dialog for InfoIcon*/}
      <Dialog
        open={openInfo}
        TransitionComponent={Transition}
        onClose={handleCloseInfo}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Info"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This is for Info
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInfo} color="primary">
            Disagree
          </Button>
          <Button onClick={handleCloseInfo} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {/*Dialog for SettingsIcon*/}
      <Dialog
        open={openSetting}
        TransitionComponent={Transition}
        onClose={handleCloseSettings}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Settings</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Info for settings
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSettings} color="primary">
            No
          </Button>
          <Button onClick={handleCloseSettings} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
