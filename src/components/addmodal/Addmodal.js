import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { fetchChart, changeChart } from "../../redux/action-creator/Charts";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import "./Addmodal.scss";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function addmodal(props) {
  const [value, setValue] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openMaxLength, setOpenMaxLength] = React.useState(false);
  const charts = useSelector((store) => store.chart.charts);
  const dispatch = useDispatch();
  const checkValue = () => {
    if (value !== "" && valueTitle !== "") {
      dispatch(fetchChart(value, valueTitle));
      if (!charts) dispatch(changeChart(0));
      else if (charts) dispatch(changeChart(charts.length));
      props.onHide();
    } else {
      handleClick();
    }
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClickMaxLength = () => {
    setOpenMaxLength(true);
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

  const checkMaxLength = (e) => {
    var texto = e;
    if (texto.length > 30) {
      handleClickMaxLength();
    } else {
      setValueTitle(texto);
    }
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      checkValue();
      document.getElementById("botonRedireccionamiento").click();
    }
  };

  return (
    <Modal
      id="modal"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id="headerModal" closeButton>
        <Modal.Title id="addtitle">Add a metric</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form autoComplete="off">
          <Form.Group className="forminput">
            <Form.Control
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Search metric"
              id="inputSearch"
              list="inputSearchlist"
              onKeyDown={keyPress}
            />
            <datalist id="inputSearchlist">
              <option>Buy Box </option>
              <option>CBT - ASP(e) Billable</option>
              <option>Avg Shipping Time</option>
              <option>Devices Sold</option>
              <option>New Buyers</option>
              <option>ASP per Shippment</option>
              <option>Unique Receivers</option>
              <option>Share GMV BuyBox</option>
            </datalist>
            <SearchIcon className="searchIcon" />
          </Form.Group>
          <Form.Group className="forminput">
            <Form.Control
              onChange={(e) => checkMaxLength(e.target.value)}
              value={valueTitle}
              type="text"
              placeholder="List name"
              onKeyDown={keyPress}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer id="footerModal">
        <Link>
          <span className="closeModal" onClick={props.onHide}>
            Cancel
          </span>
        </Link>

        {value && valueTitle ? (
          <Link to="/" id="botonRedireccionamiento">
            <span
              className="closeModal"
              onClick={() => {
                checkValue();
              }}
            >
              Done
            </span>
          </Link>
        ) : (
          <Link>
            <span
              className="closeModal"
              onClick={() => {
                checkValue();
              }}
            >
              Done
            </span>
          </Link>
        )}
      </Modal.Footer>

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
    </Modal>
  );
}
