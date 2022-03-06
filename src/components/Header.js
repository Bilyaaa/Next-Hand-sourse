import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";

function Header() {
  const isAdmin = true;
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
              <Nav.Link href={LOGIN_ROUTE}>Войти</Nav.Link>
              <NavDropdown title="Меню" id="basic-nav-dropdown">
                <NavDropdown.Item href={BASKET_ROUTE}>Корзина</NavDropdown.Item>
                <NavDropdown.Item href={SHOP_ROUTE}>Магазин</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) => localStorage.clear()}
                  href="#action/3.3"
                >
                  Очистить корзину
                </NavDropdown.Item>

                {isAdmin ? (
                  <>
                    {" "}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href={ADMIN_ROUTE}>
                      Админ панель
                    </NavDropdown.Item>
                  </>
                ) : (
                  " "
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
