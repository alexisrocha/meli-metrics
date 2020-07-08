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
          <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Nav.Link>Nombre vista actual</Nav.Link>
          <Nav.Link>Mi lista de kpis</Nav.Link>
          <Nav.Link>Mis alarmas</Nav.Link>
          <Nav.Item style={{ color: "black", marginRight: 10 }}>
            Visualizacion
          </Nav.Item>
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
      </Navbar>
    </div>
  );
}
