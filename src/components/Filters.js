import { Accordion, ListGroup } from 'react-bootstrap'


function Filters ({brandSelect, selectBrand, filteredAllBrand, filteredBrand, typeSelect, selectType}) {
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