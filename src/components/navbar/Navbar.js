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
  const location = useSelector((store) => store.location);

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
  console.log("La metric es:", metric);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    console.log("entre al useeffect de navbar", selectedChart, charts);
  }, [selectedChart, charts.length]);
  return (
    <div>
      <div className="navbar">
        <Navbar variant="light">
          <div className="container navcontainer">
            <div style={{ marginLeft: "15px" }}>
              <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
            </div>
            <div className="items">
              {!selectedChart && !charts.length ? (
                <Nav.Link>
                  <Link
                    to="/"
                    style={{
                      color: selectedClass == "title" ? "#449fd7" : "#9e9e9e",
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
                        color: selectedClass == "title" ? "#449fd7" : "#9e9e9e",
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
                    color: selectedClass == "kpis" ? "#449fd7" : "#9e9e9e",
                  }}
                  onClick={() => {
                    setColor("kpis");
                  }}
                >
                  My KPIs
                </Link>
              </Nav.Link>
              <Nav.Link
                style={{
                  color: selectedClass == "alarms" ? "#449fd7" : "#9e9e9e",
                }}
                onClick={() => {
                  setColor("alarms");
                }}
              >
                My alarms
              </Nav.Link>
            </div>

            {Object.keys(metric.metric).length == 0 ||
            location.location == "list" ? (
              <div style={{ width: 260 }}></div>
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
