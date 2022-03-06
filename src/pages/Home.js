import { Container, Card, Button } from "react-bootstrap";
import home from "../images/home.jpg";
import { SHOP_ROUTE } from "../utils/consts";

function Home() {
  return (
    <Container style={{ marginTop: "10%",}}>
     
      <Card className="text-white" style={{ border: "none"}}>
        {/* <Card.Img className="home-img" style={{background:'white'}} src={home} alt="Card image" /> */}
        <Card.ImgOverlay style={{ display: "flex", flexDirection: "column" }}>
          <Card.Title
            style={{
              fontSize: "5rem",
              textAlign: "center",
              marginTop: "10rem",
            }}
          >
            ДОБРО ПОЖАЛОВАТЬ
          </Card.Title>
          <Card.Text
            style={{ fontSize: "2rem", textAlign: "center", marginTop: "2rem" }}
          >
            В интернет-магазин подержанной брэндовой одежды
          </Card.Text>
          <Button
            variant="outline-light"
            style={{
              width: "fit-content",
              alignSelf: "center",
              marginTop: "2rem",
              fontSize: "2rem",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href={SHOP_ROUTE}
            >
              В магазин
            </a>
          </Button>
        </Card.ImgOverlay>
      </Card>
 
    </Container>
  );
}

export default Home;
