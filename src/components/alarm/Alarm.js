import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetric } from "../../redux/action-creator/Metrics";
import "../alarms/Alarms.scss";
import { deleteAlarm, editAlarm } from "../../redux/action-creator/Alarms";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import ModalAlarms from "../modalAlarms/ModalAlarms";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
import "../editmodal/Editmodal.scss";
import { addAlarm } from "../../redux/action-creator/Alarms";
export default function Alarm({ metricId, triggers, index }) {
  const dispatch = useDispatch();
  const [openInfo, setOpenInfo] = React.useState(false);
  const handleClickOpenInfo = (params, index) => {
    setIndexTrigger(index);
    if (params.trigger_type == "target") {
      setTime(params.trigger_type);
      setComparisonOperator(params.config.comparison_operator);
      setComparisonValue(params.config.value);
      setSiteComparison(params.config.dimension.site);
      setSubgroupComparison(params.config.dimension.subgroup);
    }

    setOpenInfo(true);
  };
  const [indexTrigger, setIndexTrigger] = React.useState(null);
  const [data, setData] = React.useState(null);
  const classes = useStyles();
  const handleCloseInfo = () => setOpenInfo(false);
  const [editar, setEditar] = React.useState(true);
  const [type, setTime] = React.useState("Type");
  const [period, setPeriod] = React.useState(null);
  const [comparisonOperator, setComparisonOperator] = React.useState(null);
  const [comparisonValue, setComparisonValue] = React.useState(null);
  const [siteComparison, setSiteComparison] = React.useState(null);
  const [subgroupComparison, setSubgroupComparison] = React.useState(null);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const sites = useSelector(
    (store) => store.metric.metric[metricId].dimensions.site
  );

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
  const editarAlarma = () => {
    setEditar(!editar);
  };

  const [edit, setEdit] = React.useState(false);
  console.log("MetricID:", metricId);
  console.log("Index:", index);
  const metric = useSelector((store) => store.metric.metric[metricId]);
  useEffect(() => {
    dispatch(fetchMetric(metricId));
  }, []);

  const checkData = () => {
    if (type == "target") {
      if (
        comparisonOperator != null &&
        comparisonValue != null &&
        siteComparison != null &&
        subgroupComparison != null
      ) {
        let obj = new Object();
        (obj.trigger_type = "target"),
          (obj.config = {
            dimension: {
              site: siteComparison,
              subgroup: subgroupComparison,
            },
            comparison_operator: comparisonOperator,
            value: comparisonValue,
          });
        dispatch(editAlarm(index, obj, indexTrigger));
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
        dispatch(editAlarm(index, obj, indexTrigger));
        resetData();
        handleClickSuccess();
      }
    } else {
      handleClick();
    }
  };
  return metric ? (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className="triggerOptions"
      >
        <Grid xs={2}></Grid>
        <Grid xs={2} className="nameOption">
          <span>{metric.name}</span>
        </Grid>
        <Grid xs={2} className="titles">
          <span>Type</span>
        </Grid>
        <Grid xs={1} className="titles">
          <span>Site</span>
        </Grid>
        <Grid xs={2} className="titles">
          <span>Comparisson</span>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
      {triggers.map((trigger, index) => (
        <Grid
          container
          direction="row"
          alignItems="center"
          className="triggerData"
        >
          <Grid xs={2}></Grid>
          <Grid xs={2} className="dataOption">
            <span className="triggerRegular">{"Trigger " + (index + 1)}</span>
          </Grid>
          <Grid xs={2} className="dataOption">
            <span>{trigger.trigger_type}</span>
          </Grid>
          <Grid xs={1} className="dataOption">
            <span>{trigger.config.dimension.site}</span>
          </Grid>
          <Grid xs={2} className="dataOption">
            <span>{trigger.config.value}</span>
          </Grid>
          <Grid xs={1} className="dataOption icons">
            <EditIcon
              style={{ marginRight: 10 }}
              onClick={() => {
                handleClickOpenInfo(trigger, index);
              }}
            />
            <DeleteIcon
              onClick={() => {
                dispatch(deleteAlarm(metricId, index));
              }}
            />
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      ))}
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        open={openInfo}
        TransitionComponent={Transition}
        onClose={handleCloseInfo}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Info"}</DialogTitle>
        <DialogContent>
          <div style={{ maxHeight: "300px", minHeight: "150px" }}>
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

            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              checkData();
              handleCloseInfo();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  ) : null;
}
