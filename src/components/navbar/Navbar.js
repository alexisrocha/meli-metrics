import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Navbar.scss"

export default () => (
    <div className="navbar">
        <Navbar variant="light">
            <div className="container navcontainer">
                <Navbar.Brand id="title">MeliMetrics</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav.Link >Nombre vista actual</Nav.Link>
                <Nav.Link >Mi lista de kpis</Nav.Link>
                <Nav.Link >Mis alarmas</Nav.Link>
            </div>
        </Navbar>
    </div>
  )