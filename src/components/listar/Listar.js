import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Iconos from "../iconos/Iconos";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {
  deleteCharts,
  changeChart,
  copyList,
  changeTitle,
} from "../../redux/action-creator/Charts";
import { changeTitleNavbar } from "../../redux/action-creator/Location";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Listar.scss";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Listar() {
  const listsCharts = useSelector((store) => store.chart.charts);
  const selectedChart = useSelector((store) => store.chart.selectedChart);
  const navbar = useSelector((store) => store.location.bool);
  const [open, setOpen] = React.useState(false);
  const [openMaxLength, setOpenMaxLength] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [numberToDelete, setNumberToDelete] = React.useState(null);
  const [copy, setCopy] = React.useState(false);
  const [tooltip, setTooltip] = React.useState(false);
  const [indexChart, setIndex] = React.useState(null);
  const [newName, setNewName] = React.useState(false);
  const deleteList = () => {
    setOpenDelete(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCloseMaxLength = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMaxLength(false);
  };

  const changeSelected = (index) => {
    dispatch(changeChart(index));
  };

  const setOver = (flag, index) => {
    if (flag == "in") {
      setCopy(true);
      setIndex(index);
    } else {
      setCopy(false);
      setIndex(index);
    }
  };

  const setearTool = (flag) => {
    if (flag == "in") {
      setTooltip(true);
    } else {
      setTooltip(false);
    }
  };
  function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Copy
      </Tooltip>
    );
  }

  const handleClickMaxLength = () => {
    setOpenMaxLength(true);
  };

  const setCopyRedux = (index) => {
    dispatch(copyList(index));
  };

  const handleCloseCard = () => {
    setOpenDelete(false);
  };

  const checkMaxLength = (e, index) => {
    var input = document.getElementById(`input${index}`);
    var texto = e;
    if (texto.length > 30) {
      handleClickMaxLength();
      input.value = input.value.slice(0, 30);
    }
  };

  const changeName = (e, index, name) => {
    e.preventDefault();
    if (name == "") {
      setOpen(true);
    } else {
      setIndex(index);

      dispatch(changeTitle(index, name));
      dispatch(changeTitleNavbar(!navbar));
      setNewName(false);
    }
  };
  return (
    <div className="container">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ maxWidth: "71%", margin: "0 auto" }}
      >
        <Grid
          item
          xs={7}
          style={{
            paddingLeft: "10px",
            color: "#9e9e9e",
            fontFamily: "Proxima Nova",
          }}
        >
          Chart name
        </Grid>
        <Grid
          item
          xs={5}
          style={{ color: "#9e9e9e", fontFamily: "Proxima Nova" }}
        >
          KPIs
        </Grid>

        {listsCharts.map((item, index) => {
          return (
            <>
              <Grid
                item
                xs={7}
                onClick={() => {
                  changeSelected(index);
                }}
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseOver={() => setOver("in", index)}
                onMouseLeave={() => setOver("out", index)}
              >
                <Link
                  id={`toMain${index}`}
                  to="/"
                  onClick={() => {
                    changeSelected(index);
                  }}
                  style={{
                    display:
                      newName && index == selectedChart ? "none" : "inline",
                  }}
                >
                  <div className="containerFirstList">
                    <div
                      style={{
                        paddingLeft: "10px",
                        fontFamily: "Proxima Nova",
                      }}
                    >
                      <strong>{item.title}</strong>
                    </div>
                  </div>
                </Link>
                <div
                  className="containerFirstList"
                  style={{
                    display:
                      newName && index == selectedChart ? "inline" : "none",
                  }}
                >
                  <div>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                      onSubmit={(e) => {
                        changeName(
                          e,
                          index,
                          document.getElementById(`input${index}`).value
                        );
                      }}
                    >
                      <TextField
                        color="primary"
                        id={`input${index}`}
                        defaultValue={item.title}
                        onChange={(e) => checkMaxLength(e.target.value, index)}
                        style={{ marginLeft: "10px", width: "67%" }}
                      />
                    </form>
                  </div>
                </div>

                <div>
                  <EditIcon
                    className="button"
                    style={{
                      display: copy && index == indexChart ? "inline" : "none",
                      transition: "all 2s ease-in",
                    }}
                    onClick={() => {
                      setNewName(true);
                    }}
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={5}
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onMouseOver={() => setOver("in", index)}
                onMouseLeave={() => setOver("out", index)}
              >
                <Iconos listaMetricas={item.config} />
                <div>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 200, hide: 0 }}
                    overlay={renderTooltip}
                  >
                    <FileCopyIcon
                      className="button"
                      style={{
                        display:
                          copy && index == indexChart ? "inline" : "none",
                        transition: "all 2s ease-in;",
                      }}
                      onClick={() => {
                        setCopyRedux(index);
                      }}
                    />
                  </OverlayTrigger>

                  <DeleteIcon
                    onClick={() => {
                      setNumberToDelete(index);
                      deleteList();
                    }}
                    className="button"
                  />
                </div>
              </Grid>
            </>
          );
        })}
      </Grid>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose}>
          ¡Todos los campos deben estar completos!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openMaxLength}
        autoHideDuration={2000}
        onClose={handleCloseMaxLength}
      >
        <Alert severity="warning" onClose={handleCloseMaxLength}>
          La longitud maxima es de 30 caracteres!
        </Alert>
      </Snackbar>

      {/*Dialog for DeleteList*/}
      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        onClose={handleCloseCard}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id="quitmodal"
      >
        <DialogTitle id="alert-dialog-slide-title">Delete List</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this list?
          </DialogContentText>
        </DialogContent>
        <DialogActions id="deleteOptions">
          <Button onClick={handleCloseCard} color="primary">
            <CloseIcon />
            No
          </Button>
          <Button
            onClick={() => {
              handleCloseCard();
              dispatch(deleteCharts(numberToDelete));
            }}
            color="primary"
          >
            <DeleteOutlineIcon />
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
