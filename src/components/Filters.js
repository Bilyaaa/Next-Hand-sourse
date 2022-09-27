import { Accordion, ListGroup } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { Context } from '../App';




function Filters ({items}) {

  const [selectType, setSelectType] = useState([]);
  const [selectBrand, setSelectBrand] = useState([]);
  let {filteredItems, setFilteredItems} = useContext(Context)
  

  
 

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
   
   filteredItems = items.filter((item) => {
      if (item.brand === value || item.type === value) { return item } else return null
    });
    setFilteredItems(filteredItems);
   
  }

  function filteredAllBrand() {
    filteredItems = items.map((item) => {
      return item;
    });
    setFilteredItems(filteredItems);
  }

    return (
        
        <div style={{ display:'flex',justifyContent:'space-between'}}>
          <Accordion
            style={{
             width:'30%',
            
          
            }}
          >
            <Accordion.Item
              style={{
                borderRadius: 0,
              }}
              eventKey="1"
            >
              <Accordion.Header onClick={brandSelect}>BRANDS</Accordion.Header>
              <Accordion.Body style={{ padding: "0", zIndex:'95' }}>
                <ListGroup style={{ borderRadius: 0 }}>
                  <ListGroup.Item
                    style={{
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                    action
                    variant="light"
                    onClick={filteredAllBrand}
                  >
                    ALL
                  </ListGroup.Item>

                  {selectBrand.map((item) => (
                    <ListGroup.Item
                      style={{
                        borderLeft: "none",
                        borderRight: "none",
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
              width:'30%',
             

            }}
          >
            <Accordion.Item
              eventKey="2"
              style={{
                borderRadius: 0,
              }}
            >
              <Accordion.Header onClick={typeSelect}>
                WOMEN CLOTHING
              </Accordion.Header>
              <Accordion.Body style={{ padding: "0" }}>
                <ListGroup style={{ borderRadius: 0 }}>
                  <ListGroup.Item
                    style={{
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                    action
                    variant="light"
                    onClick={filteredAllBrand}
                  >
                    ALL
                  </ListGroup.Item>
                  {selectType.map((item) => (
                    <ListGroup.Item
                      style={{
                        borderLeft: "none",
                        borderRight: "none",
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
          <Accordion style={{width:'30%', }}>
            <Accordion.Item
              style={{
                borderRadius: 0,
                
              }}
              eventKey="3"
            >
              <Accordion.Header>KIDS CLOTHING</Accordion.Header>
              <Accordion.Body style={{ padding: "0" }}></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
   
    )
}

export default Filters