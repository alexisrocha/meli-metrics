import React from "react";
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
  const title = useSelector((store) => store.chart.title);
  const metric = useSelector((store) => store.metric);
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
  return (
    <div>
      <div className="navbar">
        <Navbar variant="light">
          <div className="container navcontainer">
            <div style={{ marginLeft: "15px" }}>
              <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
            </div>

            <div className="items">
              {title == "" ? (
                <Nav.Link className="selected">
                  <Link to="/">Main View</Link>
                </Nav.Link>
              ) : (
                <Nav.Link className="selected">
                  <Link to="/"> {title}</Link>
                </Nav.Link>
              )}
              <Nav.Link>
                <Link to="/list">My KPIs</Link>
              </Nav.Link>
              <Nav.Link>My alarms</Nav.Link>
            </div>

            {Object.keys(metric.metric).length == 0 ? (
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
