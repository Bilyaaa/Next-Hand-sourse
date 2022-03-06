import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import {DEVICE_ROUTE} from '../utils/consts'



function Item({item}) {
    return (
        
        <Col xl={4} lg={6} key={item.id} style={{ paddingBottom: "2rem" }}>
      <Link to={DEVICE_ROUTE + "/" +  item.id} style={{textDecoration:'none', color:'grey'}}>
        <Card
          key={item.id}
          style={{
             border: "none",
             boxShadow: "0 0 10px grey",
             borderRadius: '0'

            }}
        >
          <Card.Img
           style={{
            borderRadius: '0'
           }}
           variant="top" src={item.imgSrc} />
          <Card.Body>
            <Card.Title>
              <span style={{fontWeight: '300'}}>{item.type}</span> {item.brand}
            </Card.Title>
            <Card.Text>{item.price} грн</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
    )
}



export default Item