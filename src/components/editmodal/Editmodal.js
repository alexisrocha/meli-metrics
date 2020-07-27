import React from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";

import "./Editmodal.scss";

export default function editmodal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="editModalTitle"
        >
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={3} lg={3}></Col>
            <Col xs={12} md={3} lg={3} className="editarSwitch">
              <span>EDITAR</span>
            </Col>
            <Col xs={6} md={3} lg={3} className="editarSwitch">
              <span style={{ color: "#cccccc" }}>ALARMA</span>
            </Col>
            <Col md={3} lg={3}></Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <label style={{ color: "#cccccc" }}>
                Site
                <input type="dropdown" name="Site" />
              </label>
            </Col>
            <Col md={3} lg={3}>
              <label style={{ color: "#cccccc" }}>
                Subgroup
                <input type="dropdown" name="Subgroup" />
              </label>
            </Col>
            <Col md={6} lg={6}></Col>
          </Row>
        </Container>

        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <span className="closeModal" onClick={props.onHide}>
          Cancel
        </span>
        <span className="closeModal" onClick={props.onHide}>
          Done
        </span>
      </Modal.Footer>
    </Modal>
  );
}
