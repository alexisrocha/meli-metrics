import React from "react";
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

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
          {/* Columna para EDITAR y ALARMA  */}
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
          {/* Columna para SITE y SUBGROUP */}
          <Row>
            <Col md={3} lg={3} className="dropdownSite">
              <label style={{ color: "#cccccc" }}>Site</label>
              <DropdownButton
                size="sm"
                title="MLA"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "0px solid white",
                }}
              >
                <Dropdown.Item eventKey="1">Dropdown Site</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown Site</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col md={3} lg={3} className="dropdownSubgroup">
              <label style={{ color: "#cccccc" }}>Subgroup</label>
              <DropdownButton
                size="sm"
                title="All sites"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "0px solid white",
                }}
              >
                <Dropdown.Item eventKey="1">Dropdown Subgroup</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown Subgroups</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col md={6} lg={20}></Col>
          </Row>
          {/* Columna para TIMEFRAME  */}
          <Row>
            <Col xs={12} md={20} className="timeFrame">
              <label style={{ color: "#cccccc" }}>Time frame</label>
              <div className="buttonModalComparacion">
                <Button style={{ fontSize: "90%", marginRight: "10px" }}>
                  Ultimos 60 dias
                </Button>
                <Button style={{ fontSize: "90%", marginRight: "10px" }}>
                  Ultimas 4 semanas
                </Button>
                <Button style={{ fontSize: "90%", marginRight: "10px" }}>
                  Ultimos 12 meses
                </Button>
              </div>
            </Col>
          </Row>
          {/* Columna para COMPARACION  */}
          <Row>
            <Col xs={12} md={20} className="comparacion">
              <label style={{ color: "#cccccc", display: "block" }}>
                Comparacion
              </label>
              <div className="buttonModalComparacion">
                <Button style={{ fontSize: "90%", marginRight: "10px" }}>
                  Last Year
                </Button>
                <Button style={{ fontSize: "90%", marginRight: "10px" }}>
                  Last month
                </Button>
                <Button style={{ fontSize: "90%", marginRight: "10px" }}>
                  Last Week
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
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
