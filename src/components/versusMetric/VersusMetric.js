import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Chart from "../chart/Chart";
import MLA from "../../../public/flags/MLA.png";
import MLB from "../../../public/flags/MLB.png";
import MLC from "../../../public/flags/MLC.png";
import MLM from "../../../public/flags/MLM.png";
import MLU from "../../../public/flags/MLU.png";
import MCO from "../../../public/flags/MCO.png";
import MGT from "../../../public/flags/MGT.png";
import MBO from "../../../public/flags/MBO.png";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SettingsIcon from "@material-ui/icons/Settings";
import GetAppIcon from "@material-ui/icons/GetApp";
import InfoIcon from "@material-ui/icons/Info";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetric } from "../../redux/action-creator/Metrics";
import { fetchMetricData } from "../../redux/action-creator/MetricData";
import { removeMetric, shadowVersus } from "../../redux/action-creator/Charts";
import Editmodal from "../editmodal/Editmodal";
import "../metric/Metric.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  title: {
    fontFamily: "Proxima Nova",
    fontSize: "100%",
  },
  item: {
    fontSize: "1.2em",
    color: "gray",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  header: {
    padding: "16px 16px 10px 16px",
  },
  circular: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

//Aca abajo deberia recibir por props un array de metricas.
export default function Metric({
  idMetrica,
  chart,
  deleteId,
  setMetricID,
  metricID,
}) {
  const classes = useStyles();
  const [modalShow, setModalShow] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openCard, setOpenCard] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);
  const [openDownload, setOpenDownload] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);
  const metric = useSelector((store) => store.metric.metric[idMetrica]);
  const charts = useSelector((store) => store.chart.charts);
  const selectedChart = useSelector((store) => store.chart.selectedChart);
  const metricData = useSelector((store) =>
    store.metricData.metricData[idMetrica]
      ? store.metricData.metricData[idMetrica][chart.time_frame]
      : store.metricData.metricData[idMetrica]
  );
  const dispatch = useDispatch();
  const deleteCard = () => {
    setOpenCard(true);
  };

  const handleClickOpenDownload = () => {
    setOpenDownload(true);
  };
  const handleClickOpenSettings = () => {
    setOpenSetting(true);
  };

  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const handleCloseDownload = () => {
    setOpenDownload(false);
  };

  const handleCloseSettings = () => {
    setOpenSetting(false);
  };

  const handleCloseCard = () => {
    setOpenCard(false);
  };

  const dif = (arr, arr2) => {
    return arr[arr.length - 1] - arr2[arr.length - 1];
  };


  const reduceInteg = number => {
    if (number > 1000000) return +(number / 1000000).toFixed(2) + "M";
    if (number < 1000000) return (number / 1000).toFixed(2) + "k";
  };

  const reduceCur2 = number => {
    if (number > 1000000) return "$" +(number / 1000000).toFixed(2) + "M";
    if (number < 1000000) return "$" + (number / 1000).toFixed(2) + "k";
  };

  const formatDec = (number) => number.toFixed(2);

  const formatPer = (number) => (number * 100).toFixed(2) + "%";

  const percentage = (arr, arr2) => ((arr / arr2 - 1) * 100).toFixed(0);

  const percentageDif = (actual, lastYear) =>
    percentage(actual, lastYear) + "%";

  const ppDif = (actual, lastYear) =>
    ((actual - lastYear) * 100).toFixed(0) + " p.p";

  const decDif = (actual, lastYear) => (actual - lastYear).toFixed(2);

  const changeCSS = (id) => {
    setMetricID(id);

    setShadow(true);
  };

  const changeCSSOut = () => {
    setShadow(false);
  };

  const colors = {
    MARKETPLACE: "#ffd100",
    "MERCADO PAGO": "#00a6dc",
    "MERCADO ENVIOS": "#a9c534",
  };

  const formatData = {


    CUR_2: info=>reduceCur2(info),
    PERC_2: info=>formatPer(info),
    INTEG: info=>reduceInteg(info),
    DEC_2: info=>formatDec(info)
  }


  const formatDif = {
    CUR_2: (actual, lastYear) => percentageDif(actual, lastYear),
    INTEG: (actual, lastYear) => percentageDif(actual, lastYear),
    PERC_2: (actual, lastYear) => ppDif(actual, lastYear),
    DEC_2: (actual, lastYear) => decDif(actual, lastYear),
  };

  var info = [];
  var shadowCssOn = "inset 0px -55px 62px -15px rgba(0,0,0,0.75)";
  var shadowCssOff = "inset 0px 0px 0px 0px rgba(0,0,0,0.75)";

  useEffect(() => {
    if (metricID == idMetrica) {
      setShadow(true);
    }
    if (metricID == -1) {
      setShadow(false);
    }
    dispatch(fetchMetric(idMetrica));
    dispatch(fetchMetricData(idMetrica, chart.time_frame));
  }, [
    idMetrica,
    charts[selectedChart].length,
    info.length,
    chart.time_frame,
    metricID,
  ]);

  if (charts[selectedChart]) {
    info = charts[selectedChart].config;
  }

  return (
    <>
      {metric && metricData && (
        <Editmodal
          index={deleteId}
          idMetrica={idMetrica}
          metric={metric}
          chart={chart}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}

      {metricData ? (
        //Este codigo falta pulir, hay que sacar todos los ternarios
        <Card
          className="cardMain"
          style={{
            width: "23%",
            marginRight: "10px",
            marginLeft: "10px",
            height: "240px",
            boxShadow: shadow ? shadowCssOn : shadowCssOff,
          }}
        >
          <div className="contenedorInfo">
            <div className="value" style={{ marginTop: "10px" }}>
              <h3>
                {metric ? (
                  <strong style={{ color: colors[metric.group] }}>
                    {metricData
                      ? formatData[metric.format](
                          metricData.data[0].data[
                            metricData.data[0].data.length - 1
                          ]
                        )
                      : 0}
                  </strong>
                ) : null}
              </h3>
            </div>

            {metricData && metric ? (
              <>
                {metricData.data[0].data[metricData.data[0].data.length - 1] -
                  metricData.data[1].data[metricData.data[1].data.length - 1] >
                0 ? (
                  <div
                    className="positive porcentaje"
                    style={{ width: metric.format == "PERC_2" ? "30%" : "25%" }}
                  >
                    <ArrowDropUpIcon />
                    <div>
                      {metricData
                        ? formatDif[metric.format](
                            metricData.data[0].data[
                              metricData.data[0].data.length - 1
                            ],
                            metricData.data[1].data[
                              metricData.data[1].data.length - 1
                            ]
                          )
                        : 0}
                    </div>
                  </div>
                ) : (
                  <div
                    className="negative porcentaje"
                    style={{ width: metric.format == "PERC_2" ? "30%" : "25%" }}
                  >
                    <ArrowDropDownIcon />
                    <div style={{ marginRight: "5px" }}>
                      {metricData
                        ? formatDif[metric.format](
                            metricData.data[0].data[
                              metricData.data[0].data.length - 1
                            ],
                            metricData.data[1].data[
                              metricData.data[1].data.length - 1
                            ]
                          )
                        : 0}
                    </div>
                  </div>
                )}
              </>
            ) : (
              0
            )}
          </div>

          <p className="timeLapse">
            YOY&nbsp;
            {metricData && metric
              ? formatData[metric.format](
                  metricData.data[1].data[metricData.data[1].data.length - 1]
                )
              : 0}
          </p>
          <CardMedia>
            <div>
              {metricData && metric ? (
                <Chart
                  metricData={metricData}
                  color={colors[metric.group]}
                  className="chart"
                />
              ) : null}
            </div>

            <div
              className="buttonContainer"
              onMouseOver={() => {
                changeCSS(idMetrica);
              }}
              onMouseLeave={changeCSSOut}
            >
              <div className="button" onClick={handleClickOpenInfo}>
                <div className="buttonItem">
                  <InfoIcon className={classes.item} />
                </div>
              </div>

              <div className="button" onClick={() => setModalShow(true)}>
                <div className="buttonItem">
                  <SettingsIcon className={classes.item} />
                </div>
              </div>

              <div className="button" onClick={handleClickOpenDownload}>
                <div className="buttonItem">
                  <GetAppIcon className={classes.item} />
                </div>
              </div>
            </div>
          </CardMedia>

          {/*Dialog for DeleteCard*/}
          <Dialog
            open={openCard}
            TransitionComponent={Transition}
            onClose={handleCloseCard}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            id="quitmodal"
          >
            <DialogTitle id="alert-dialog-slide-title">Delete Card</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you sure to remove this card?
              </DialogContentText>
            </DialogContent>
            <DialogActions id="deleteOptions">
              <Button onClick={handleCloseCard} color="primary">
                <CloseIcon />
                No
              </Button>
              <Button
                onClick={() => {
                  dispatch(
                    removeMetric(
                      deleteId,
                      selectedChart,
                      charts[selectedChart].config.length
                    )
                  );
                  handleCloseCard();
                }}
                color="primary"
              >
                <DeleteOutlineIcon />
                Yes
              </Button>
            </DialogActions>
          </Dialog>

          {/*Dialog for InfoIcon*/}
          <Dialog
            open={openInfo}
            TransitionComponent={Transition}
            onClose={handleCloseInfo}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Info"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                This is for Info
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseInfo} color="primary">
                Disagree
              </Button>
              <Button onClick={handleCloseInfo} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>

          {/*Dialog for DownloadIcon*/}
          <Dialog
            open={openDownload}
            TransitionComponent={Transition}
            onClose={handleCloseDownload}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">Download</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to download data in a csv format?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDownload} color="primary">
                No
              </Button>
              <Button onClick={handleCloseDownload} color="primary">
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      ) : (
        <Card className="cardMain" style={{ height: "270px" }}>
          <div className="circularProgress">
            <div className={classes.circular}>
              <CircularProgress />
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
