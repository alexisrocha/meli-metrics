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
    fontSize: "120%",
  },
  item: {
    fontSize: "1.2em",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

//Aca abajo deberia recibir por props un array de metricas.
export default function Metric() {
  const classes = useStyles();
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openCard, setOpenCard] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);

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

  return (
    <Card className="cardMain">
      <CardHeader
        avatar={<Avatar className={classes.small} src={MLA}></Avatar>}
        title={<Typography className={classes.title}>Buy Box - GMV</Typography>}
        action={
          <IconButton aria-label="settings" onClick={deleteCard}>
            <CloseIcon/>
          </IconButton>
        }
      />
      <div className="contenedorInfo">
        <div className="value">
          <h3>
            <strong>4.008.828</strong>
          </h3>
        </div>

        <div className="porcentaje">
          <ArrowDropUpIcon />
          20%
        </div>
      </div>
      <p className="timeLapse">YOY:$188.834.485</p>
      <CardMedia>
        <Chart />
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
          <Button onClick={handleCloseCard} color="primary">
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
