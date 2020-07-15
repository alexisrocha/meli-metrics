import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { fetchChart } from "../../redux/action-creator/Charts";
import "./Addmodal.scss";

export default function addmodal(props) {
  const dispatch = useDispatch();
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
        <Form>
          <Form.Group className="forminput">
            <Form.Control
              type="text"
              placeholder="Search metric"
              id="inputSearch"
            />
            <SearchIcon className="searchIcon" />
          </Form.Group>
          <Form.Group className="forminput">
            <Form.Control type="text" placeholder="Nombre de la lista" />
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
            dispatch(fetchChart());
            props.onHide();
          }}
        >
          Listo
        </span>
      </Modal.Footer>
    </Modal>
  );
}
