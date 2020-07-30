import React, { useEffect, useState } from "react";
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
import VersusChartContainer from "../versusChart/VersusChartContainer";
import { makeStyles } from "@material-ui/core/styles";
import {
  addCountry,
  deleteCountry,
  sendToVersus,
} from "../../redux/action-creator/Versus";
import { setLocation } from "../../redux/action-creator/Location";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Search from "../search/Search";
import "./Versus.scss";

export default function versus() {
  const [chartsVersus, setChartsVersus] = useState([]);
  const [indexItem, setIndex] = useState(null);
  const [shadow, setShadow] = useState(false);
  const chartVersus = useSelector((store) => store.versus.chartVersus);
  const charts = useSelector((store) => store.chart.charts);
  const selectedChart = useSelector((store) => store.chart.selectedChart);
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
    MGT: MGT,
  };
  const flagsArray = ["MLA", "MLB", "MLC", "MLM", "MLU", "MBO", "MCO", "MGT"];
  const dispatch = useDispatch();
  const addToModal = (name) => {
    dispatch(addCountry(name));
  };
  let flagsSelected = [];

  useEffect(() => {
    dispatch(setLocation("main"));
    for (let i = 0; i < charts[selectedChart].config.length; i++) {
      if (
        !flagsSelected.includes(charts[selectedChart].config[i].dimension.site)
      )
        flagsSelected = [
          ...flagsSelected,
          charts[selectedChart].config[i].dimension.site,
        ];
    }
    dispatch(sendToVersus(charts[selectedChart].config, flagsSelected));
  }, []);

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
      <Navbar id="navbarVersus" variant="dark" fixed="top">
        <div className="container">
          <Nav id="navVersus" className="mr-auto">
            {selectedCountries.map((country, index) => {
              if (index < 4) {
                return (
                  <Nav.Link
                    className="navbutton"
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
                {selectedCountries.length < 4 ? (
                  <strong color="white">
                    <AddIcon
                      fontSize="small"
                      style={{
                        color: "white",
                      }}
                    />
                  </strong>
                ) : null}

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
      <div className="container">
        <Search />
        <VersusChartContainer />
      </div>
    </>
  );
}
