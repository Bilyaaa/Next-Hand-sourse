import { Navbar, Nav, Container } from "react-bootstrap";

import React from "react";
import {
  HOME_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  DELIVERY_ROUTE,
} from "../utils/consts";
import '../styles/Header.scss'

function Header() {

  return (
    <Container
      style={{
        zIndex: "100",
        position: "fixed",
        margin: "0 auto",
        padding: " 1rem 0",
        top: "0",
        maxWidth: "100%",
        background: "white",
        borderBottom:'2px solid black'
      }}
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            href={HOME_ROUTE}
            style={{ letterSpacing: ".4em", fontSize: "1.7rem" }}
          >
            NEXT HAND
          </Navbar.Brand>





     





          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav>
              
              <Nav.Link className="nav-menu-a" href={SHOP_ROUTE}>Shop</Nav.Link>
              <Nav.Link className="nav-menu-a" href={BASKET_ROUTE}>Basket</Nav.Link>
              <Nav.Link className="nav-menu-a" href={DELIVERY_ROUTE}>Delivery</Nav.Link>
              <Nav.Link className="nav-menu-a" href={BASKET_ROUTE}>Contacts</Nav.Link>
              <Nav.Link className="nav-menu-a" href={BASKET_ROUTE}>About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
