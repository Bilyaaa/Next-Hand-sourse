import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ItemLeft, ItemRight } from "../components/Item";
import  Filters from '../components/Filters'
import '../styles/Shop.scss'
import React from "react";
import { Context } from '../App'





function Shop() {
  const {items, setItems} = useContext(Context);
  const{filteredItems, setFilteredItems} = useContext(Context);


  return (
    <Context.Provider value={{filteredItems, setFilteredItems}}>
    <Container className="mainContainer">
      <div className="filterContainer">
        <div className="filter">
          <Filters items={items}></Filters>
         
        </div>
      </div>
      <div style={{ width: '80%' }}>
        <Row>
          <Col xl={6} style={{ padding: "0" }}>
            {filteredItems.length
              ? filteredItems.map((item) => {
                if (filteredItems.indexOf(item) % 2 === 0) {
                  return (
                    <>
                      <ItemLeft key={item.id} item={item} />
                      <div className="blackLine"></div>
                    </>
                  );
                }
                else return null;
              })
              : items.map((item) => {
                if (items.indexOf(item) % 2 === 0) {
                  return (
                    <>
                      <ItemLeft key={item.id} item={item} />
                      <div className="blackLine"></div>
                    </>
                  );
                }
                else return null;
              })}
          </Col>
          <Col xl={6} style={{ padding: "0" }}>
            {filteredItems.length
              ? filteredItems.map((item) => {
                if (filteredItems.indexOf(item) % 2 !== 0) {
                  return (
                    <>
                      <ItemRight key={item.id} item={item} />
                      <div className="blackLineR"></div>
                    </>
                  );
                }
                else return null;
              })
              : items.map((item) => {
                if (items.indexOf(item) % 2 !== 0) {
                  return (
                    <>
                      <ItemRight key={item.id} item={item} />
                      <div className="blackLineR"></div>
                    </>
                  );
                }
                else return null;
              })}
          </Col>
        </Row>
      </div>
    </Container>
    </Context.Provider>
  );
}

export default Shop;
