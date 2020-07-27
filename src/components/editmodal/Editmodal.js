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
import { useSelector } from "react-redux";
import "./Editmodal.scss";

export default function editmodal(props) {
  console.log("Las props son:", props);
  const metricOptions = useSelector(
    (store) => store.metric.metric[props.idMetrica]
  );

  const [site, setSite] = React.useState(props.chart.dimension.site);
  const [subgroup, setSubgroup] = React.useState(
    props.chart.dimension.subgroup
  );
  const [timeFrame, setTimeFrame] = React.useState(props.chart.time_frame);
  const [comparison, setComparison] = React.useState(
    props.chart.comparation[0]
  );

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
          {props.metric.display_name}
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
              <DropdownButton id="dropdownMenuButton" size="sm" title={site}>
                {metricOptions &&
                  metricOptions.dimensions.site.map((elem, index) => {
                    return (
                      <Dropdown.Item
                        eventKey={index + 1}
                        onClick={() => {
                          setSite(elem);
                        }}
                      >
                        {elem}
                      </Dropdown.Item>
                    );
                  })}
              </DropdownButton>
            </Col>
            <Col md={3} lg={3} className="dropdownSubgroup">
              <label style={{ color: "#cccccc" }}>Subgroup</label>
              <DropdownButton
                id="dropdownMenuButton2"
                size="sm"
                title={subgroup}
              >
                {metricOptions &&
                  metricOptions.dimensions.subgroup.map((elem, index) => {
                    return (
                      <Dropdown.Item
                        eventKey={index + 1}
                        onClick={() => {
                          setSubgroup(elem);
                        }}
                      >
                        {elem}
                      </Dropdown.Item>
                    );
                  })}
              </DropdownButton>
            </Col>
            <Col md={6} lg={20}></Col>
          </Row>
          {/* Columna para TIMEFRAME  */}
          <Row>
            <Col xs={12} md={20} className="timeFrame">
              <label style={{ color: "#cccccc" }}>Time frame</label>
              <div className="buttonModalComparacion">
                {metricOptions &&
                  metricOptions.time_frames.map((elem) => {
                    return (
                      <Button
                        style={{ fontSize: "90%", marginRight: "10px" }}
                        onClick={() => {
                          setTimeFrame(elem.desc);
                        }}
                      >
                        {elem.desc}
                      </Button>
                    );
                  })}
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
                {metricOptions &&
                  metricOptions.date_comp.map((elem, index) => {
                    return (
                      <Button
                        style={{ fontSize: "90%", marginRight: "10px" }}
                        onClick={() => {
                          setComparison(elem.code);
                        }}
                      >
                        {elem.desc}
                      </Button>
                    );
                  })}
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
