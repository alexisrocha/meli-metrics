import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./Alarms.scss";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Alarms() {

  return (
    <div className="container">
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ maxWidth: "71%", margin: "0 auto" }}
      >
          <Grid
          item
          xs={2}
          style={{
            paddingLeft: "10px",
            color: "black",
            fontFamily: "Proxima Nova",
          }}
        >
            <h4>GMV</h4>
        </Grid>
        <Grid
          item
          xs={4}
          style={{ color: "#9e9e9e", fontFamily: "Proxima Nova" }}
        >
            Period
        </Grid>
        <Grid
          item
          xs={1}
          style={{ color: "#9e9e9e", fontFamily: "Proxima Nova" }}
        >
            Site
        </Grid>
        <Grid
          item
          xs={4}
          style={{ color: "#9e9e9e", fontFamily: "Proxima Nova" }}
        >
            Comparison
        </Grid>
        <Grid
          item
          xs={1}
          style={{ color: "#9e9e9e", fontFamily: "Proxima Nova" }}
        >
            
        </Grid>
        {/* MAP ACA*/}
        <br></br>
        <Grid
          item
          xs={2}
          style={{ color: "black", fontFamily: "Proxima Nova" }}
        >
            Trigger 1
        </Grid>
        <Grid
          item
          xs={4}
          style={{ color: "black", fontFamily: "Proxima Nova" }}
        >
            D-1 vs D-1 LW
        </Grid>
        <Grid
          item
          xs={1}
          style={{ color: "black", fontFamily: "Proxima Nova" }}
        >
            MLC
        </Grid>
        <Grid
          item
          xs={4}
          style={{ color: "#9e9e9e", fontFamily: "Proxima Nova" }}
        >
            Below 8%
        </Grid>
      </Grid>
    </div>
  );
}
