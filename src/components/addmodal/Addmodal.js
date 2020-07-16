import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { fetchChart, changeChart } from "../../redux/action-creator/Charts";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./Addmodal.scss";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function addmodal(props) {
  const [value, setValue] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const dispatch = useDispatch();
  const checkValue = () => {
    if (value !== "" && valueTitle !== "") {
      dispatch(fetchChart(value));
      dispatch(changeChart(valueTitle));
      props.onHide();
    } else {
      handleClick();
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
        <Form autocomplete="off">
          <Form.Group className="forminput">
            <Form.Control
              onChange={(e) => setValue(e.target.value)}
              value={value}
              placeholder="Search metric"
              id="inputSearch"
              list="inputSearchlist"
            />
            <datalist id="inputSearchlist"> 
            <option>Buy Box</option> 
            <option>Devices Sold</option> 
            <option>Share GMV Buy Box</option> 
            <option>Green</option> 
            </datalist>
            <SearchIcon className="searchIcon" />
          </Form.Group>
          <Form.Group className="forminput">
            <Form.Control
              onChange={(e) => setValueTitle(e.target.value)}
              value={valueTitle}
              type="text"
              placeholder="Nombre de la lista"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer id="footerModal">
        <span className="closeModal" onClick={props.onHide}>
          Cancelar
        </span>
        <span
          className="closeModal"
          onClick={() => {
            checkValue();
          }}
        >
          Listo
        </span>
      </Modal.Footer>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose}>
          ¡Todos los campos deben estar completos!
        </Alert>
      </Snackbar>
    </Modal>
  );
}
