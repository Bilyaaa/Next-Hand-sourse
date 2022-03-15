import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import { DEVICE_ROUTE } from '../utils/consts'
import '../styles/Item.scss'




function ItemLeft({ item }) {
  return (
    <Link to={DEVICE_ROUTE + "/" + item.id} style={{ textDecoration: 'none', color: 'grey' }}>
      <Card className='container__card' key={item.id}>
        <div className='div-type'>{item.type}</div>            
        <div><Card.Img variant="top" src={item.imgSrc}/></div> 
      </Card>
      <div className='text-container'>
        <div className='div__brand'>{item.brand}</div>  
        <div className='div__price'>{item.price} ₴</div>                   
      </div>
    </Link>
  )
}



export { ItemLeft }


function ItemRight({ item }) {
  return (
    <Link to={DEVICE_ROUTE + "/" + item.id} style={{ textDecoration: 'none', color: 'grey' }}>
    <Card className='container__cardR' key={item.id}>
      <div><Card.Img variant="top" src={item.imgSrc}/></div> 
      <div className='div-typeR'>{item.type}</div>            
      
    </Card>
    <div className='text-containerR'>
      <div className='div__priceR'>{item.price} ₴</div> 
      <div className='div__brandR'>{item.brand}</div>  
                        
    </div>
  </Link>
  )
}

export { ItemRight }