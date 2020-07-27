import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useSelector } from "react-redux";

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
                    to="/"
                    style={{
                      color: location == "main" ? "#449fd7" : "#9e9e9e",
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
                  {charts[selectedChart] && (
                    <Link
                      to="/"
                      style={{
                        color: location == "main" ? "#449fd7" : "#9e9e9e",
                      }}
                      onClick={() => {
                        setColor("title");
                      }}
                    >
                      {charts[selectedChart].title}
                    </Link>
                  )}
                </Nav.Link>
              )}
              <Nav.Link>
                <Link
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
              <Nav.Link
                style={{
                  color: location == "alarms" ? "#449fd7" : "#9e9e9e",
                }}
                onClick={() => {
                  setColor("alarms");
                }}
              >
                My alarms
              </Nav.Link>
            </div>

            {!charts.length > 0 || location == "list" ? (
              <div style={{ width: 253, marginRight: "15px" }}></div>
            ) : (
              <div className="divVisualizacion">
                <div>
                  <Nav.Item id="mode">Visualization</Nav.Item>
                </div>
                <div class="divMain">
                  <div
                    className={activeClassLeft ? "activeCSS" : "desactivated"}
                    onClick={() => {
                      changeCSS("left");
                    }}
                  >
                    <div> Simple</div>
                  </div>
                  <div
                    className={activeClassRight ? "activeCSS" : "desactivated"}
                    onClick={() => {
                      changeCSS("right");
                    }}
                  >
                    <div> Versus</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Navbar>
      </div>
    </div>
  );
}
