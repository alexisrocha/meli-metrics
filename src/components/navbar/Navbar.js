import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useSelector, useDispatch } from "react-redux";
import { changeView } from "../../redux/action-creator/Charts";
import { setLocation } from "../../redux/action-creator/Location";
import "./Navbar.scss";

export default function navbar() {
  const [value, setValue] = React.useState(0);
  const [activeClassLeft, setActiveClassLeft] = React.useState(true);
  const [activeClassRight, setActiveClassRight] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState(null);
  const charts = useSelector((store) => store.chart.charts);
  const selectedChart = useSelector((store) => store.chart.selectedChart);
  const metric = useSelector((store) => store.metric);
  const location = useSelector((store) => store.location.location);
  const titleChange = useSelector((store) => store.location.bool);
  const dispatch = useDispatch();
  const setColor = (title) => {
    setSelectedClass(title);
  };

  const changeCSS = (position) => {
    if (position == "left") {
      setActiveClassLeft(true);
      setActiveClassRight(false);
    } else {
      setActiveClassLeft(false);
      setActiveClassRight(true);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeData = (type) => {
    dispatch(changeView(selectedChart, type));
  };

  useEffect(() => {}, [selectedChart, charts.length, titleChange]);
  return (
    <div>
      <div className="navbar">
        <Navbar variant="light">
          <div className="container navcontainer">
            <div style={{ marginLeft: "15px" }}>
              <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
            </div>
            <div className="items">
              {(selectedChart == -1 && !charts.length) || charts.length == 0 ? (
                <Nav.Link>
                  <Link
                    className="linkNavbar"
                    to="/"
                    style={{
                      color:
                        location == "main" || location == "versus"
                          ? "#449fd7"
                          : "#9e9e9e",
                    }}
                    onClick={() => {
                      setColor("title");
                    }}
                  >
                    Main View
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link>
                  {charts[selectedChart] &&
                  charts[selectedChart].type == "simple" ? (
                    <Link
                      className="linkNavbar"
                      to="/"
                      style={{
                        color:
                          location == "main" || location == "versus"
                            ? "#449fd7"
                            : "#9e9e9e",
                      }}
                      onClick={() => {
                        setColor("title");
                      }}
                    >
                      {charts[selectedChart].title}
                    </Link>
                  ) : null}
                  {charts[selectedChart] &&
                  charts[selectedChart].type == "versus" ? (
                    <Link
                      className="linkNavbar"
                      to="/versus"
                      style={{
                        color:
                          location == "main" || location == "versus"
                            ? "#449fd7"
                            : "#9e9e9e",
                      }}
                      onClick={() => {
                        setColor("title");
                      }}
                    >
                      {charts[selectedChart].title}
                    </Link>
                  ) : null}
                </Nav.Link>
              )}
              <Nav.Link>
                <Link
                  className="linkNavbar"
                  to="/list"
                  style={{
                    color: location == "list" ? "#449fd7" : "#9e9e9e",
                  }}
                  onClick={() => {
                    setColor("kpis");
                  }}
                >
                  My Charts
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="linkNavbar"
                  to="/alarms"
                  style={{
                    color: location == "alarms" ? "#449fd7" : "#9e9e9e",
                  }}
                  onClick={() => {
                    setColor("kpis");
                    dispatch(setLocation("alarms"));
                  }}
                >
                  My Alarms
                </Link>
              </Nav.Link>
            </div>

            {!charts.length > 0 ||
            location == "list" ||
            location == "alarms" ? (
              <div style={{ width: 253, marginRight: "15px" }}></div>
            ) : (
              <div className="divVisualizacion">
                <div>
                  <Nav.Item id="mode">Visualization</Nav.Item>
                </div>
                <div class="divMain">
                  <Link className="linkSwitch" to="/">
                    {charts[selectedChart] != null ? (
                      <div
                        className={
                          charts[selectedChart].type == "simple"
                            ? "activeCSS"
                            : "desactivated"
                        }
                        onClick={() => {
                          changeData("simple");
                          changeCSS("left");
                        }}
                      >
                        <div>Simple</div>
                      </div>
                    ) : null}
                  </Link>
                  <Link className="linkSwitch" to="/versus">
                    {charts[selectedChart] != null ? (
                      <div
                        className={
                          charts[selectedChart].type == "versus"
                            ? "activeCSS"
                            : "desactivated"
                        }
                        onClick={() => {
                          changeData("versus");
                          changeCSS("right");
                        }}
                      >
                        <div>Versus</div>
                      </div>
                    ) : null}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Navbar>
      </div>
    </div>
  );
}
