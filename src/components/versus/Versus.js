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
import { addCountry, deleteCountry } from "../../redux/action-creator/Versus";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
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
  const [indexItem, setIndex] = React.useState(null);
  const [shadow, setShadow] = React.useState(false);

  const changeCSS = () => {
    setShadow(true);
  };

  const changeCSSOut = () => {
    setShadow(false);
  };
  const deleteName = (name) => {
    dispatch(deleteCountry(name));
  };
  return (
    <>
      <Navbar id="navbarVersus" variant="dark">
        <div className="container">
          <Nav id="navVersus" className="mr-auto">
            {selectedCountries.map((country, index) => {
              if (index < 4) {
                return (
                  <Nav.Link
                    className="navbutton"
                    href="#home"
                    onMouseOver={() => {
                      setIndex(index);
                      changeCSS();
                    }}
                    onMouseLeave={changeCSSOut}
                  >
                    <img src={flags[country]} className="flagsVersus" />
                    &nbsp;{country}
                    <DeleteIcon
                      style={{
                        color: "white",
                        display:
                          shadow && index == indexItem ? "inline" : "none",
                      }}
                      className="buttonDeleteNavbar"
                      onClick={() => {
                        deleteName(country);
                      }}
                    />
                  </Nav.Link>
                );
              }
            })}
            <Nav.Link>
              <div id="dropdownAgregar" class="dropdown">
                <strong color="white">
                  <AddIcon
                    fontSize="small"
                    style={{
                      color: "white",
                    }}
                  />
                </strong>
                <div id="dropdownContentAgregar" class="dropdown-content">
                  {flagsArray.map((item, index) => {
                    if (
                      !selectedCountries.includes(item) &&
                      selectedCountries.length < 4
                    ) {
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
