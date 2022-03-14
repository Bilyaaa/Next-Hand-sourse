import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import {DEVICE_ROUTE} from '../utils/consts'
import '../styles/Item.scss'



function ItemLeft({item}) {
    return (
        
       
      <Link to={DEVICE_ROUTE + "/" +  item.id} style={{textDecoration:'none', color:'grey'}}>
        <Card className='container__card' key={item.id}>
          
          <div className='container__card__div1'>
            <div>
              
            <Card.Img variant="top" src={item.imgSrc}/>
            </div>
            <div className='container__card__div1__block'>150 ₴<p/>
            <span className='container__card__div1__block-span'>{item.type}<span className='span__text'>{item.brand}</span></span>
            </div>
          </div>
        </Card>
      </Link>
    
    )
}



export { ItemLeft }


function ItemRight({item}) {
  return (
      
      
    <Link to={DEVICE_ROUTE + "/" +  item.id} style={{textDecoration:'none', color:'grey'}}>
      <Card className='container__cardR' key={item.id}>
        
        <div className='container__card__div1R'>
          <div>
            
          <Card.Img variant="top" src={item.imgSrc}/>
          </div>
          <div className='container__card__div1__blockR'>150 ₴<p/>
          <span className='container__card__div1__block-spanR'>{item.type}<span className='span__textR'>{item.brand}</span></span>
          </div>
        </div>
      </Card>
    </Link>
 
  )
}

export { ItemRight }