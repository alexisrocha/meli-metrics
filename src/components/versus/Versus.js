import React from "react";
import { useDispatch, useSelector, useState } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import MLA from "../../../public/flags/MLA.png";
import MLB from "../../../public/flags/MLB.png";
import MLC from "../../../public/flags/MLC.png";
import MLM from "../../../public/flags/MLM.png";
import MLU from "../../../public/flags/MLU.png";
import MCO from "../../../public/flags/MCO.png";
import MGT from "../../../public/flags/MGT.png";
import MBO from "../../../public/flags/MBO.png";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";

import { makeStyles } from "@material-ui/core/styles";
import "./Versus.scss";

export default function versus() {
  const selectedCountries = useSelector(
    (store) => store.versus.selectedCountries
  );
  const flags = {
    MLA: MLA,
    MLB: MLB,
    MLC: MLC,
    MLM: MLM,
    MLU: MLU,
    MBO: MBO,
    MCO: MCO,
    MGU: MGT,
  };
  const [shadow, setShadow] = React.useState(false);

  const changeCSS = () => {
    setShadow(true);
  };

  const changeCSSOut = () => {
    setShadow(false);
  };
  return (
    <>
      <Navbar id="navbarVersus" variant="dark">
        <div className="container">
          <Nav id="navVersus" className="mr-auto">
            {selectedCountries.map((country) => (
              <Nav.Link
                className="navbutton"
                href="#home"
                onMouseOver={changeCSS}
                onMouseLeave={changeCSSOut}
              >
                <img src={flags[country]} className="flagsVersus" />
                &nbsp;{country}
                <DeleteIcon
                  style={{ display: shadow ? "inline" : "none" }}
                  className="buttonDeleteNavbar"
                />
              </Nav.Link>
            ))}
            <Nav.Link href="#home">
              <strong>+</strong>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}
