import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useSelector } from "react-redux";

import "./Navbar.scss";

export default function navbar() {
  const [value, setValue] = React.useState(0);
  const title = useSelector((store) => store.chart.title);
  const metric = useSelector((store) => store.metric);
  console.log("La metric es:", metric);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {Object.keys(metric.metric).length == 0 ? (
        <div>
          <Navbar variant="light">
            <div className="titleFirst">
              <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
            </div>
            <div className="itemsFirst">
              {title == "" ? (
                <Nav.Link className="selected">Vista principal</Nav.Link>
              ) : (
                <Nav.Link className="selected">{title}</Nav.Link>
              )}
              <Nav.Link>Mi lista de kpis</Nav.Link>
              <Nav.Link>Mis alarmas</Nav.Link>
            </div>
          </Navbar>
        </div>
      ) : (
        <div className="navbar">
          <Navbar variant="light">
            <div className="container navcontainer">
              <div>
                <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
              </div>
              <div className="items">
                {title == "" ? (
                  <Nav.Link className="selected">Vista principal</Nav.Link>
                ) : (
                  <Nav.Link className="selected">{title}</Nav.Link>
                )}
                <Nav.Link>Mi lista de kpis</Nav.Link>
                <Nav.Link>Mis alarmas</Nav.Link>
              </div>
              <div className="itemRight">
                <Nav.Item id="mode">Visualización</Nav.Item>
                <Tabs
                  className="tabsGroup"
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="Single" aria-selected="false" />
                  <Tab label="Versus" aria-selected="false" />
                </Tabs>
              </div>
            </div>
          </Navbar>
        </div>
      )}
    </div>
  );
}
