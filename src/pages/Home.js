import '../styles/Home.scss'
import { Container, Button } from "react-bootstrap";
import city from '../images/city.jpg';
import Dog from '../images/Dog.jpg'
import Wclothing from '../images/Wclothing.jpg'
import { Link } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts'


function HomeSec1 () {
  return (
    <Container className='home__container'>
    <div className='home__container__img_container1'>
      <div className='home__container__img_container1-block1'>
        <div        className='home__container__img_container1-block1-text1'>WELCOME</div>
          <div className='home__container__img_container1-block1-text2'>
            To the site of used brand clothing
            <Link to={SHOP_ROUTE}>
            <Button variant='outline-light'>
              
              SHOP
            </Button></Link>
          </div>
      </div>
    </div>
    <div className='home__container__img_container2'>
      <img src={city}/>
    </div>
  </Container>
  )
}

function HomeSec2 () {
  return (
    <Container>      
      <div className='home__container2__block1'>
        <Link to={SHOP_ROUTE}>WE MAKE STYLE</Link>
      </div>     
    </Container>
  )
}

function HomeSec3 (props) {

  return (
    <Container className='home__container3'>
      <div className='home__container3__img'>
        <img src={props.src}/>
      </div>      
      <div className='home__container3__div'>
        <div className='home__container3__div-block1'>
          {props.label} <span>CLOTHING</span>
            <div className='home__container3__div-block2'>
            <Link to={SHOP_ROUTE}>
            <Button variant='outline-light'>
              SHOP
            </Button></Link>
          </div> 
          
        </div>
     
      </div> 
        
        
    </Container>
  )
}



function Home() {
  return (
  <>  
 <HomeSec1/>
 <HomeSec2/>
 <HomeSec3 label='WOMEN' src={Wclothing}/>
 <HomeSec2/>
 <HomeSec3 label='KID' src={Dog}/>
 </>   
  
    
  );
}

export default Home;
