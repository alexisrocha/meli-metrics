import React from "react";
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
import {
  deleteCharts,
  changeChart,
  copyList,
} from "../../redux/action-creator/Charts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Listar.scss";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function Listar({ listsCharts }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [numberToDelete, setNumberToDelete] = React.useState(null);
  const [copy, setCopy] = React.useState(false);
  const [tooltip, setTooltip] = React.useState(false);
  const [indexChart, setIndex] = React.useState(null);
  const deleteList = () => {
    setOpenDelete(true);
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

  const setCopyRedux = (index) => {
    dispatch(copyList(index));
  };

  const handleCloseCard = () => {
    setOpenDelete(false);
  };
  let diccionario = new Object();
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
          List name
        </Grid>
        <Grid
          item
          xs={5}
          style={{ color: "#9e9e9e", fontFamily: "Proxima Nova" }}
        >
          KPIs
        </Grid>

        {listsCharts.map((item, index) => {
          {
            !diccionario[item.name]
              ? (diccionario[item.name] = 1)
              : (diccionario[item.name] += 1);
          }

          return (
            <>
              <Grid
                item
                xs={7}
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
                <div className="containerFirstList">
                  <div
                    style={{ paddingLeft: "10px", fontFamily: "Proxima Nova" }}
                  >
                    {diccionario[item.name] != 1 ? (
                      <strong>
                        {item.title + " (" + (diccionario[item.name] - 1) + ")"}
                      </strong>
                    ) : (
                      <strong>{item.title}</strong>
                    )}
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <Link
                      to="/"
                      onClick={() => {
                        console.log("El index es:", index);
                        changeSelected(index);
                      }}
                      style={{
                        display:
                          copy && index == indexChart ? "inline" : "none",
                        transition: "all 2s ease-in;",
                      }}
                    >
                      <EditIcon className="button" />
                    </Link>
                  </div>
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
                      deleteList();
                      setNumberToDelete(index);
                    }}
                    className="button"
                  />
                </div>
              </Grid>
            </>
          );
        })}
      </Grid>

      {/*Dialog for DeleteList*/}
      <Dialog
        open={openDelete}
        TransitionComponent={Transition}
        onClose={handleCloseCard}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Delete List</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCard} color="primary">
            <CloseIcon />
            No
          </Button>
          <Button
            onClick={() => {
              handleCloseCard();
              dispatch(deleteCharts(numberToDelete));
              dispatch(changeChart(0));
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
