import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import {
  HOME_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  DELIVERY_ROUTE,
} from "../utils/consts";

function Header() {

  return (
    <Container
      style={{
        zIndex: "100",
        position: "fixed",
        margin: "0 auto",
        padding: "0",
        top: "0",
        maxWidth: "100%",
        background: "white",
      }}
    >
      <Navbar expand="lg" style={{ borderBottom: "1px solid grey" }}>
        <Container>
          <Navbar.Brand
            href={HOME_ROUTE}
            style={{ letterSpacing: ".4em", fontSize: "1.7rem" }}
          >
            NEXT HAND
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav>
              <Nav.Link href={SHOP_ROUTE}>Магазин</Nav.Link>
              <Nav.Link href={BASKET_ROUTE}>Корзина</Nav.Link>
              <Nav.Link href={DELIVERY_ROUTE}>Доставка</Nav.Link>
              <Nav.Link href={BASKET_ROUTE}>Контакты</Nav.Link>
              <Nav.Link href={BASKET_ROUTE}>О нас</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
