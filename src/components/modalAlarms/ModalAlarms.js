import React, { useEffect } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  changeMetricInfo,
  changeTimeFrame,
} from "../../redux/action-creator/Charts";
import "../editmodal/Editmodal.scss";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { addAlarm } from "../../redux/action-creator/Alarms";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function editmodal(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
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
  const metricOptions = useSelector(
    (store) => store.metric.metric[props.idMetrica]
  );

  const charts = useSelector((store) => store.chart.charts);
  const selectedChart = useSelector((store) => store.chart.selectedChart);
  const location = useSelector((store) => store.location.location);
  const sites = useSelector(
    (store) => store.metric.metric[props.idMetrica].dimensions.site
  );

  const subSites = useSelector(
    (store) => store.metric.metric[props.idMetrica].dimensions.subgroup
  );
  const selectedCountries = useSelector(
    (store) => store.chart.selectedCountries
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
  const [editar, setEditar] = React.useState(true);
  const [type, setTime] = React.useState("Type");
  const [period, setPeriod] = React.useState(null);
  const [comparisonOperator, setComparisonOperator] = React.useState(null);
  const [comparisonValue, setComparisonValue] = React.useState(null);
  const [siteComparison, setSiteComparison] = React.useState(null);
  const [subgroupComparison, setSubgroupComparison] = React.useState(null);

  const editarAlarma = () => {
    setEditar(!editar);
  };

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

  const changeComparisonValue = (e) => {
    if (Number(e.target.value).toString() == "NaN") {
      setComparisonValue(e.target.value.slice(0, -1));
    } else {
      setComparisonValue(e.target.value);
    }
  };

  const resetData = () => {
    setTime("Type");
    setPeriod(null);
    setComparisonOperator(null);
    setComparisonValue(null);
    setSiteComparison(null);
    setSubgroupComparison(null);
  };
  const checkData = () => {
    if (type == "target") {
      if (
        period != null &&
        comparisonOperator != null &&
        comparisonValue != null
      ) {
        let obj = new Object();
        (obj.trigger_type = "target"),
          (obj.config = {
            dimension: {
              site: site,
              subgroup: subgroup,
            },
            comparison_operator: comparisonOperator,
            value: comparisonValue,
          });
        dispatch(addAlarm(props.idMetrica, obj));
        resetData();
        handleClickSuccess();
      } else {
        handleClick();
      }
    } else if (type == "comparison") {
      if (
        period != null &&
        subgroupComparison != null &&
        siteComparison != null &&
        comparisonOperator != null &&
        comparisonValue != null
      ) {
        console.log(
          "Llego con estos valores:",
          period,
          subgroupComparison,
          siteComparison,
          comparisonOperator,
          comparisonValue
        );
        let obj = new Object();
        (obj.trigger_type = "comparison"),
          (obj.config = {
            dimension: {
              site: siteComparison,
              subgroup: subgroupComparison,
            },
            comparison_operator: comparisonOperator,
            value: comparisonValue,
            period: {
              period_code: 0,
              period_desc: period,
            },
            type: "percentage",
          });
        dispatch(addAlarm(props.idMetrica, obj));
        resetData();
        handleClickSuccess();
      }
    } else {
      handleClick();
    }
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
          {location == "versus" ? (
            <div className="infoWarning">
              El cambio que hagas aplica a todas las cards de la misma fila
            </div>
          ) : null}
          {editar ? (
            <Row>
              <Col md={3} lg={3}></Col>
              <Col xs={12} md={3} lg={3} className="editarSwitch">
                <span onClick={editarAlarma}>EDIT</span>
              </Col>
              <Col xs={6} md={3} lg={3} className="editarSwitch">
                <span onClick={editarAlarma} style={{ color: "#cccccc" }}>
                  ALARM
                </span>
              </Col>
              <Col md={3} lg={3}></Col>
            </Row>
          ) : (
            <Row>
              <Col md={3} lg={3}></Col>
              <Col xs={12} md={3} lg={3} className="editarSwitch">
                <span onClick={editarAlarma} style={{ color: "#cccccc" }}>
                  EDITAR
                </span>
              </Col>
              <Col xs={6} md={3} lg={3} className="editarSwitch">
                <span onClick={editarAlarma}>ALARMA</span>
              </Col>
              <Col md={3} lg={3}></Col>
            </Row>
          )}

          {editar ? (
            <React.Fragment>
              <Row>
                <Col md={3} lg={3} className="dropdownSite">
                  <label style={{ color: "gray" }}>Site</label>
                  {location == "versus" ? (
                    <DropdownButton
                      disabled={true}
                      id="dropdownMenuButton"
                      size="sm"
                      title={site}
                    >
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
                  ) : (
                    <DropdownButton
                      id="dropdownMenuButton"
                      size="sm"
                      title={site}
                    >
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
                  )}
                </Col>
                <Col md={3} lg={3} className="dropdownSubgroup">
                  <label style={{ color: "gray" }}>Subgroup</label>
                  {location == "versus" ? (
                    <DropdownButton
                      disabled={true}
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
                  ) : (
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
                  )}
                </Col>
                <Col md={6} lg={20}></Col>
              </Row>

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
                                timeFrameButton == elem.desc
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
                        }
                      })}
                  </div>
                </Col>
              </Row>
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
            </React.Fragment>
          ) : (
            <div>
              <span className="editAlarm">TRIGGER 1</span>
              <DropdownButton
                id="dropdownMenuButton"
                size="sm"
                title={type[0].toUpperCase() + type.substring(1)}
                style={{ marginBottom: 10 }}
              >
                <Dropdown.Item
                  eventKey={0}
                  onClick={() => {
                    setTime("target");
                  }}
                >
                  Target
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey={1}
                  onClick={() => {
                    setTime("comparison");
                  }}
                >
                  Comparison
                </Dropdown.Item>
              </DropdownButton>

              {type == "target" ? (
                <>
                  <DropdownButton
                    id="dropdownMenuButton"
                    size="sm"
                    title={period || "Period"}
                    style={{ marginBottom: 10 }}
                  >
                    <Dropdown.Item
                      eventKey={0}
                      onClick={() => {
                        setPeriod("D-1 vs D-1 LM");
                      }}
                    >
                      D-1 vs D-1 LM
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={1}
                      onClick={() => {
                        setPeriod("D-1 vs D-1 LW");
                      }}
                    >
                      D-1 vs D-1 LW
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={2}
                      onClick={() => {
                        setPeriod("MTD vs MTD LM");
                      }}
                    >
                      MTD vs MTD LM
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={3}
                      onClick={() => {
                        setPeriod("YTD vs YTD LY");
                      }}
                    >
                      YTD vs YTD LY
                    </Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton
                    id="dropdownMenuButton"
                    size="sm"
                    title={comparisonOperator || "Comparison"}
                    style={{ marginBottom: 10 }}
                  >
                    <Dropdown.Item
                      eventKey={0}
                      onClick={() => {
                        setComparisonOperator("gt");
                      }}
                    >
                      Greater than
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={1}
                      onClick={() => {
                        setComparisonOperator("lt");
                      }}
                    >
                      Lower than
                    </Dropdown.Item>
                  </DropdownButton>

                  <Form.Label>Comparison</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="5%"
                    onChange={changeComparisonValue}
                    value={comparisonValue}
                    style={{ marginBottom: 10 }}
                  />
                </>
              ) : null}

              {type == "comparison" ? (
                <>
                  <DropdownButton
                    id="dropdownMenuButton"
                    size="sm"
                    title={period || "Period"}
                    style={{ marginBottom: 10 }}
                  >
                    <Dropdown.Item
                      eventKey={0}
                      onClick={() => {
                        setPeriod("D-1 vs D-1 LM");
                      }}
                    >
                      D-1 vs D-1 LM
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={1}
                      onClick={() => {
                        setPeriod("D-1 vs D-1 LW");
                      }}
                    >
                      D-1 vs D-1 LW
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={2}
                      onClick={() => {
                        setPeriod("MTD vs MTD LM");
                      }}
                    >
                      MTD vs MTD LM
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={3}
                      onClick={() => {
                        setPeriod("YTD vs YTD LY");
                      }}
                    >
                      YTD vs YTD LY
                    </Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton
                    id="dropdownMenuButton"
                    size="sm"
                    title={siteComparison || "Site"}
                    style={{ marginBottom: 10 }}
                  >
                    {sites &&
                      sites.map((data, index) => {
                        return (
                          <Dropdown.Item
                            eventKey={index}
                            onClick={() => {
                              setSiteComparison(data);
                            }}
                          >
                            {data}
                          </Dropdown.Item>
                        );
                      })}
                  </DropdownButton>

                  <DropdownButton
                    id="dropdownMenuButton"
                    size="sm"
                    title={subgroupComparison || "Subgroup"}
                    style={{ marginBottom: 10 }}
                  >
                    {subSites &&
                      subSites.map((data, index) => {
                        return (
                          <Dropdown.Item
                            eventKey={index}
                            onClick={() => {
                              setSubgroupComparison(data);
                            }}
                          >
                            {data}
                          </Dropdown.Item>
                        );
                      })}
                  </DropdownButton>

                  <DropdownButton
                    id="dropdownMenuButton"
                    size="sm"
                    title={comparisonOperator || "Comparison"}
                    style={{ marginBottom: 10 }}
                  >
                    <Dropdown.Item
                      eventKey={0}
                      onClick={() => {
                        setComparisonOperator("gt");
                      }}
                    >
                      Greater than
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey={1}
                      onClick={() => {
                        setComparisonOperator("lt");
                      }}
                    >
                      Lower than
                    </Dropdown.Item>
                  </DropdownButton>

                  <Form.Label>Comparison</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="5%"
                    onChange={changeComparisonValue}
                    value={comparisonValue}
                    style={{ marginBottom: 10 }}
                  />
                </>
              ) : null}

              <div
                className="editAlarm2"
                onClick={() => {
                  checkData();
                }}
              >
                {" "}
                + TRIGGER{" "}
              </div>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="warning">
                  All fields must be completed
                </Alert>
              </Snackbar>
              <Snackbar
                open={openSuccess}
                autoHideDuration={2000}
                onClose={handleCloseSuccess}
              >
                <Alert onClose={handleCloseSuccess} severity="success">
                  The alarm was created
                </Alert>
              </Snackbar>
            </div>
          )}
        </Container>
      </Modal.Body>
    </Modal>
  );
}
