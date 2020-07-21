import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Listar.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function Listar() {
  const classes = useStyles();
  return (
    <div className="container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={5}>
          Nombre lista:
        </Grid>
        <Grid item xs={7} style={{ paddingLeft: "25px" }}>
          KPIs
        </Grid>

        {/* Un elemento*/}
        <Grid
          item
          xs={5}
          style={{
            backgroundColor: "white",
            height: "40px",
            marginBottom: "10px",
          }}
        >
          Titulo
        </Grid>
        <Grid
          item
          xs={7}
          style={{
            backgroundColor: "white",
            height: "40px",
            marginBottom: "10px",
          }}
        >
          <div className="contenedorKpis" style={{ paddingLeft: "25px" }}>
            <div>Iconos</div>
            <div>Editar eliminar</div>
          </div>
        </Grid>

        {/* Otro elemento*/}
        <Grid item xs={5} style={{ backgroundColor: "white", height: "40px" }}>
          Titulo
        </Grid>
        <Grid item xs={7} style={{ backgroundColor: "white", height: "40px" }}>
          <div className="contenedorKpis" style={{ paddingLeft: "25px" }}>
            <div>Iconos</div>
            <div>Editar eliminar</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
