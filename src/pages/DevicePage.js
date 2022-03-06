
import { Card, Container, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { items, SHOP_ROUTE } from "../utils/consts";
import Swal from 'sweetalert2'
import ZoomImg from "../components/ZoomImg";
import $ from 'jquery'

function DevicePage() {
  let storedData = localStorage.getItem("basket");
  let basketItems = storedData ? JSON.parse(storedData) : [];
  console.log(basketItems)

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  let myId = document.location.pathname.split("/").splice(2, 1);
  myId = parseInt(myId);
  const myItem = items.filter((item) => {
    if (item.id === myId) {
      return item;
    }
  });
  return myItem.map((i) => (
    <Container
    
      key={i.id}
      style={{ marginTop: "6rem", display: "flex", position: "relative" }}
    >
      <ZoomImg i={i}></ZoomImg>
      <div
        style={{
          fontSize: "10rem",
          position: "absolute",
          left: "-8rem",
          top: "-5rem",
        }}
      >
        <Link
          to={SHOP_ROUTE}
          style={{ textDecoration: "none", color: "black" }}
        >
          &#8249;
        </Link>
      </div>
      <div style={{ width: "45%", position:'relative' }}>
        <div 
        
        className="lupa-item"
        style={{fontSize:'3rem', position:'absolute', zIndex:'100', display:'flex', width:'100%', paddingRight:'.8rem', justifyContent:'flex-end', cursor:'pointer', opacity:'.7'}}
        onClick={(e) => {
        $('.drop-item').css('display', 'block')
        $('.hide-item').css('display', 'none')
        $('.lupa-item').css('display', 'none')
      }}
        >&#128269;</div>
        <Carousel className="hide-item" interval={10000}>
          <Carousel.Item>
            <img className="d-block w-100" src={i.imgSrc} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={i.imgSrc2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={i.imgSrc3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ marginLeft: "5rem", width: "50%" }}>
        <Card.Body style={{ padding: "1rem 0" }}>
          <Card.Title
            style={{ fontSize: "5rem", fontWeight: "300", color: "grey" }}
          >
            {i.name}{" "}
            <span style={{ color: "black", fontWeight: "400" }}>{i.brand}</span>
          </Card.Title>
          <Card.Text
            style={{ fontSize: "2rem", fontWeight: "300", color: "grey" }}
          >
            Стоимость:{" "}
            <span style={{ color: "black", fontWeight: "400" }}>
              {i.price} грн
            </span>{" "}
          </Card.Text>
        </Card.Body>
        <Button
          item={i}
          onClick={(e) => {
            if (!basketItems.includes(i)) {
              basketItems.push(i);
            }
            localStorage.setItem("basket", JSON.stringify(basketItems));
            console.log(basketItems);
            Toast.fire({
              icon: 'success',
              title: 'Товар добавлен в корзину'
            })
          }}
          variant="outline-success"
          type="submit"
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            marginRight: "2rem",
          }}
        >
          В корзину
        </Button>
        <Button
          variant="outline-dark"
          onClick={(e) => {
            localStorage.clear();
            console.log(localStorage);
            basketItems = [];
            
          }}
        >
          Очистить
        </Button>
       
      </div>
    </Container>
  ));
}

export default DevicePage;
