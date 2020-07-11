import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "./Addmodal.scss"

export default function addmodal(props) {
    return (
      <Modal
        id="modal"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="addtitle">Add a metric</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="forminput">
            <Form.Control type="text" placeholder="Search metric" />
          </Form.Group>
          <Form.Group className="forminput">
            <Form.Control type="text" placeholder="Nombre de la lista" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <span className="closeModal" onClick={props.onHide}>Cancelar</span>
          <span className="closeModal" onClick={props.onHide}>Listo</span>
        </Modal.Footer>
      </Modal>
    );
  }