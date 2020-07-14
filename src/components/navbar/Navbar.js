import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./Navbar.scss";

export default function navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="navbar">
      <Navbar variant="light">
        <div className="container navcontainer">
          <div>
            <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
          </div>
          <div className="items">
            <Nav.Link className="selected">Nombre vista actual</Nav.Link>
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
  );
}
