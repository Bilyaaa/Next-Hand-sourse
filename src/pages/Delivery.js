import { Container } from "react-bootstrap";
import fdehbsd from '../images/fdehbsd.svg'

function Delivery () {
   return (
       <Container style={{
           fontSize:'5rem',
           marginTop: '10rem', 
           display: 'flex', 
           flexDirection:'column',
           justifyContent:'center'
            }}>
            <div style={{
              background:'white',
              padding:'2rem 6rem 4rem 6rem'
            }}>
          <div style={{
              display:'flex', 
              justifyContent:'center',  
              background:'white'
            }}>   
          Доставка
          </div>
          <div style={{
              display:'flex', 
              flexDirection:'column',
              justifyContent:'center', 
              alignItems:'center',
              background:'white',
              fontSize:'3rem',
              paddingTop:'3rem'
            }}>
          Способы доставки
          <div style={{
              fontSize:'1.85rem',
              marginBottom:'2rem'
            }}
          >Доставка осуществляется по почте одним из двух перевозчиков на Ваш выбор </div>
          <div style={{
              fontSize:'2rem',
              display:'flex',
              justifyContent:'space-between',
              width:'100%'
            }}>
              
          <div style={{
              padding:'2rem .5rem'
          }}>
          <ul style={{
              fontSize:'1.5rem'
              }}>
              <a href="https://novaposhta.ua/ru"><li style={{
                  marginBottom:'1rem',
                  color:'black'
              }}>
                  <img src="https://novaposhta.ua/runtime/cache/320x95/nova–poshta-15-long_320px.png"></img></li></a>
              <a href="https://ukrposhta.ua/ua"><li style={{
                  color:'black'
              }}>
                  <img src={fdehbsd}></img></li></a>
                <li> либо самовывозом со с. м. Черниговская.</li>
          </ul>
          </div>
          <div  style={{
              padding:'.5rem 1rem'
          }}>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.91216550511!2d30.62291535784161!3d50.46299583481385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1323ed96761%3A0x214e1a4da43b3f94!2z0JDQlNCS0J7QmtCQ0KIg0JrQkNCb0JXQndCh0KzQmtCY0Jkg0JLQm9CQ0JTQmNCh0JvQkNCSINCG0JPQntCg0J7QktCY0Kc!5e0!3m2!1sru!2sua!4v1646572663531!5m2!1sru!2sua" width="400" height="200" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
          </div>
          
          </div>
           </div>
            <div style={{fontSize:'1.2rem'}}> &#x2217; При оформлении заказа до 12:00 отправка осуществляется в день заказа
          </div>
          
           
         

          </div>
          
       </Container>
   )
}


export default Delivery;