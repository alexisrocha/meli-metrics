import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "./Navbar.scss"

export default () => (
    <div className="nav">
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">MeliMetrics</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )