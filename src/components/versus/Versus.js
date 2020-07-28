import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { makeStyles } from "@material-ui/core/styles";
import { addCountry } from "../../redux/action-creator/Versus";
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
  const flagsArray = ["MLA", "MLB", "MLC", "MLM", "MLU", "MBO", "MCO", "MGU"];
  const dispatch = useDispatch();
  const addToModal = (name) => {
    dispatch(addCountry(name));
  };

  useEffect(() => {}, [selectedCountries.length]);

  return (
    <>
      <Navbar id="navbarVersus" variant="dark">
        <div className="container">
          <Nav id="navVersus" className="mr-auto">
            {selectedCountries.map((country, index) => {
              if (index < 4) {
                return (
                  <Nav.Link className="navbutton" href="#home">
                    <img src={flags[country]} className="flagsVersus" />
                    &nbsp;{country}
                  </Nav.Link>
                );
              }
            })}
            <Nav.Link>
              <div class="dropdown">
                <strong color="white">+</strong>
                <div class="dropdown-content">
                  {flagsArray.map((item, index) => {
                    if (!selectedCountries.includes(item)) {
                      return (
                        <p
                          key={item + index}
                          style={{ color: "grey" }}
                          onClick={() => {
                            addToModal(item);
                          }}
                        >
                          {item}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}
