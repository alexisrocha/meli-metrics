import React from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeMetricInfo } from "../../redux/action-creator/Charts";
import "./Editmodal.scss";

export default function editmodal(props) {
  const dispatch = useDispatch();
  const metricOptions = useSelector(
    (store) => store.metric.metric[props.idMetrica]
  );

  const [timeFrameButton, setTimeFrameButton] = React.useState(
    props.chart.time_frame
  );
  const [comparationButton, setComparationButton] = React.useState(
    props.chart.comparation[0]
  );
  const [site, setSite] = React.useState(props.chart.dimension.site);
  const [subgroup, setSubgroup] = React.useState(
    props.chart.dimension.subgroup
  );
  const [timeFrame, setTimeFrame] = React.useState(props.chart.time_frame);
  const [comparison, setComparison] = React.useState(
    props.chart.comparation[0]
  );

  const unselected = {
    fontSize: "90%",
    marginRight: "10px",
    color: "gray",
    backgroundColor: "#f2f2f2",
    border: "1px solid #e6e6e6",
  };

  const selected = {
    fontSize: "90%",
    marginRight: "10px",
  };

  const sendData = () => {
    dispatch(
      changeMetricInfo(
        props.index,
        props.chart.metric_id,
        site,
        subgroup,
        timeFrame,
        comparison
      )
    );
  };

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
              <label style={{ color: "gray" }}>Site</label>
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
              <label style={{ color: "gray" }}>Subgroup</label>
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
              <label style={{ color: "gray" }}>Time frame</label>
              <div className="buttonModalComparacion">
                {metricOptions &&
                  metricOptions.time_frames.map((elem) => {
                    if (elem.desc == props.chart.time_frame) {
                      return (
                        <Button
                          style={
                            timeFrameButton == elem.desc &&
                            elem.desc == props.chart.time_frame
                              ? selected
                              : unselected
                          }
                          onClick={() => {
                            setTimeFrame(elem.desc);
                            setTimeFrameButton(elem.desc);
                          }}
                        >
                          {elem.desc}
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          style={
                            timeFrameButton == elem.desc ? selected : unselected
                          }
                          onClick={() => {
                            setTimeFrame(elem.desc);
                            setTimeFrameButton(elem.desc);
                          }}
                        >
                          {elem.desc}
                        </Button>
                      );
                    }
                  })}
              </div>
            </Col>
          </Row>
          {/* Columna para COMPARACION  */}
          <Row>
            <Col xs={12} md={20} className="comparacion">
              <label style={{ color: "gray", display: "block" }}>
                Comparacion
              </label>
              <div className="buttonModalComparacion">
                {metricOptions &&
                  metricOptions.date_comp.map((elem, index) => {
                    if (elem.code == props.chart.comparation[0]) {
                      return (
                        <Button
                          style={
                            comparationButton == elem.code &&
                            elem.code == props.chart.comparation[0]
                              ? selected
                              : unselected
                          }
                          onClick={() => {
                            setComparison(elem.code);
                            setComparationButton(elem.code);
                          }}
                        >
                          {elem.desc}
                        </Button>
                      );
                    } else {
                      return (
                        <Button
                          style={
                            comparationButton == elem.code
                              ? selected
                              : unselected
                          }
                          onClick={() => {
                            setComparison(elem.code);
                            setComparationButton(elem.code);
                          }}
                        >
                          {elem.desc}
                        </Button>
                      );
                    }
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
        <span
          className="closeModal"
          onClick={() => {
            props.onHide();
            sendData();
          }}
        >
          Done
        </span>
      </Modal.Footer>
    </Modal>
  );
}
