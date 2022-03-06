

import { Container, Card, Button, Form } from "react-bootstrap";
import { useLocation } from "react-router";


import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

function Auth() {
  const location = useLocation();
  console.log(location);
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      style={{
        margin: "10rem auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        className="text-center"
        style={{ width: "50%", boxShadow: "0 0 5px grey" }}
      >
        <Card.Body>
          <Card.Text style={{ fontSize: "2.5rem" }}>
            {isLogin ? "Авторизация" : "Регистрация"}
          </Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Введите email . . ."
                // onKeyUp={(e) => {
                //   let value = e.currentTarget.value;
                //   user.email = value;
                //   console.log(user);
                // }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Введите пароль . . ."
                // onKeyUp={(e) => {
                //   let value = e.currentTarget.value;
                //   user.password = value;
                //   console.log(user);
                // }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            {isLogin ? (
              <>
                <a href={REGISTRATION_ROUTE} style={{ marginRight: "2rem" }}>
                  Зарегистрироваться
                </a>
                <Button
                  variant="outline-success"
                  type="submit"
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                  onClick={event =>{
                    event.preventDefault()
                    console.log(Form.label)
                  }}
                >
                  Войти
                </Button>
              </>
            ) : (
              <>
                <a href={LOGIN_ROUTE} style={{ marginRight: "2rem" }}>
                  Авторизироваться
                </a>
                <Button
                  variant="outline-success"
                  type="submit"
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                  {isLogin ? "Войти" : "Зарегистрироваться"}
                </Button>
              </>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Auth;
