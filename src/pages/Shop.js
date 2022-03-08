import { Container, Row, Accordion, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import blue1 from "../images/blue1.jpg";
import blue2 from "../images/blue2.jpg";
import blue3 from "../images/blue3.jpg";
import red1 from "../images/red1.jpg";
import red2 from "../images/red2.jpg";
import red3 from "../images/red3.jpg";
import bod1 from "../images/bod1.jpg";
import bod2 from "../images/bod2.jpg";
import bod3 from "../images/bod3.jpg";
import shi1 from "../images/shi1.jpg";
import shi2 from "../images/shi2.jpg";
import shi3 from "../images/shi3.jpg";
import body1 from "../images/body1.jpg";
import body2 from "../images/body2.jpg";
import body3 from "../images/body3.jpg";
import white1 from "../images/white1.jpg";
import white2 from "../images/white2.jpg";
import white3 from "../images/white3.jpg";
import col1 from "../images/col1.jpg";
import col2 from "../images/col2.jpg";
import col3 from "../images/col3.jpg";

function Shop() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectBrand, setSelectBrand] = useState([]);
  const [selectType, setSelectType] = useState([]);

  function brandSelect() {
    let selectBrand = items.reduce((acc, item) => {
      if (!acc.includes(item.brand)) {
        acc.push(item.brand);
      }
      return acc;
    }, []);
    setSelectBrand(selectBrand);
  }

  function typeSelect() {
    let selectType = items.reduce((acc, item) => {
      if (!acc.includes(item.type)) {
        acc.push(item.type);
      }
      return acc;
    }, []);
    setSelectType(selectType);
  }

  function filteredBrand(value) {
    let filteredItems = items.filter((item) => {
      if (item.brand === value || item.type === value) {
        return item;
      }
    });

    setFilteredItems(filteredItems);
  }

  function filteredAllBrand() {
    let filteredItems = items.map((item) => {
      return item;
    });
    setFilteredItems(filteredItems);
  }

  useEffect(() => {
    
      setItems([
        {
          id: 1,
          type: "Юбка",
          brand: "Divided",
          price: 150,
          imgSrc: shi1,
          imgSrc2: shi2,
          imgSrc3: shi3,
        },
        {
          id: 2,
          type: "Платье",
          brand: "Atmosphere",
          price: 250,
          imgSrc: blue1,
          imgSrc2: blue2,
          imgSrc3: blue3,
        },
        {
          id: 3,
          type: "Комбинезон",
          brand: "Vero Moda",
          price: 300,
          imgSrc: bod1,
          imgSrc2: bod2,
          imgSrc3: bod3,
        },
        {
          id: 4,
          type: "Боди",
          brand: "Zara",
          price: 450,
          imgSrc: body1,
          imgSrc2: body2,
          imgSrc3: body3,
        },
        {
          id: 5,
          type: "Платье",
          brand: "Atmosphere",
          price: 50,
          imgSrc: white1,
          imgSrc2: white2,
          imgSrc3: white3,
        },
        {
          id: 6,
          type: "Гольф",
          brand: "Zara",
          price: 600,
          imgSrc: red1,
          imgSrc2: red2,
          imgSrc3: red3,
        },
        {
          id: 7,
          type: "Комбинезон",
          brand: "BooHoo",
          price: 600,
          imgSrc: col1,
          imgSrc2: col2,
          imgSrc3: col3,
        },
      ]);
    
  }, []);

  return (
    <Container style={{ display: "flex", marginTop: "6rem"  }}>
      <div style={{ width: "20%", paddingRight: "2rem" }} className={'d-none  d-xl-block' }>
        
          <Accordion
          style={{
            marginBottom:'.7rem'
          }}
          >
            <Accordion.Item 
            style={{
              borderRadius: 0, 
            }}
            eventKey="1">
              <Accordion.Header onClick={brandSelect}>Бренды</Accordion.Header>
              <Accordion.Body 
              style={{padding: "0"}}>
                <ListGroup
                 style={{borderRadius: 0}}>
                  <ListGroup.Item
                    style={{
                      borderLeft:'none',
                      borderRight:'none',
                    }}
                    action
                    variant="light"
                    onClick={filteredAllBrand}
                  >
                    Все
                  </ListGroup.Item>

                  {selectBrand.map((item) => (
                    <ListGroup.Item
                    style={{
                      borderLeft:'none',
                      borderRight:'none',
                    }}
                      key={item}
                      action
                      variant="light"
                      onClick={(e) => {
                        let value = e.currentTarget.textContent;
                        filteredBrand(value);
                      }}
                    >
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <Accordion
            style={{
              marginBottom:'.7rem'
            }}
            >
            <Accordion.Item 
            eventKey="2"
            style={{
              borderRadius: 0
            }}>
              <Accordion.Header onClick={typeSelect}>
                Женская одежда
              </Accordion.Header>
              <Accordion.Body style={{ padding: "0" }}>
                <ListGroup style={{borderRadius: 0}}>
                  <ListGroup.Item
                     style={{
                      borderLeft:'none',
                      borderRight:'none',
                    }}
                    action
                    variant="light"
                    onClick={filteredAllBrand}
                  >
                    Все
                  </ListGroup.Item>
                  {selectType.map((item) => (
                    <ListGroup.Item
                    style={{
                      borderLeft:'none',
                      borderRight:'none',
                    }}
                      key={item}
                      action
                      variant="light"
                      onClick={(e) => {
                        let value = e.currentTarget.textContent;
                        filteredBrand(value);
                      }}
                    >
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <Accordion>
            <Accordion.Item 
            style={{
              borderRadius: 0
            }}
            eventKey="3"
            >
              <Accordion.Header>Детская одежда</Accordion.Header>
              <Accordion.Body style={{ padding: "0" }}>
               
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        
      </div>
      <div style={{ width: "80%" }}>
        <Row>
          {filteredItems.length
            ? filteredItems.map((item) => <Item key={item.id} item={item} />)
            : items.map((item) => <Item key={item.id} item={item} />)}
        </Row>
      </div>
    </Container>
  );
}


export default Shop;
