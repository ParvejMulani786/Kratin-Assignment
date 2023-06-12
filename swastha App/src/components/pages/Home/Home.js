import React from 'react';
//import Back from '../../../assets/Home.jpg';
//import Diet from '../../assets/diet.jpg';
import {CardData} from './CardData';
import Item from './Item';
import './home.css';

export default function Home(){

return (
<>
<div className="body">
{/* <h2>Health is wealth</h2> */}
  <div  className="home">
    
 </div>
 </div>
 <div className='items'>
            {CardData.map((p)=>(  
            <Item data={p} />        
        ))}

</div>


<div className='vedios'>
    <div style={{paddingBottom:"30px"}}>
<h2 style={{color:"black"}}>VIDEOS</h2>
</div>
<iframe style={{paddingRight:"30px",marginBottom:"40px"}} width="360" height="180" src="https://www.youtube.com/embed/g5HeVRgcGD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media;
 gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
 <iframe style={{paddingRight:"30px",marginBottom:"40px"}} width="360" height="180" src="https://www.youtube.com/embed/ijrYp5emz_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
 encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe style={{paddingRight:"30px",marginBottom:"40px"}} width="360" height="180" src="https://www.youtube.com/embed/VVwcEjVohgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe style={{paddingRight:"30px",marginBottom:"40px"}} width="360" height="180" src="https://www.youtube.com/embed/-vqaDWmMn3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe style={{paddingRight:"30px",marginBottom:"40px"}} width="360" height="180" src="https://www.youtube.com/embed/8AtmuAmE0vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
 gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe style={{paddingRight:"30px",marginBottom:"40px"}} width="360" height="180" src="https://www.youtube.com/embed/LTLYiQRYGjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


</div>

<div style={{marginTop:"50px"}} className='aboutUs' id="aboutUs">
    <h2 style={{color:"black"}}>ABOUT US</h2>
    <p>Welcome to our Swastha healthcare website dedicated to the well-being of individuals aged 65 and above. We understand that your health and happiness are of utmost importance, and we strive to provide comprehensive resources and support tailored specifically to your needs.Your well-being is at the core of everything we do. We are committed to providing you with the highest quality information and support, empowering you to make informed decisions about your health and leading a fulfilling life. Together, let's embrace the joys of aging and embark on a journey of lifelong health and happiness.</p>
    <h4 style={{color:"black"}}>Our Mission</h4>
    <p>Our mission is to empower and enrich the lives of seniors by offering reliable information, services, and products that promote healthy living, independence, and overall well-being. We aim to be your trusted partner in navigating the complexities of healthcare, providing guidance and support every step of the way.</p>
    
</div>
<p>
    <p>
<div style={{marginTop:"50px"}}className='contactUs' id="contactUs">
    <h2 style={{color:"black"}}>CONTACT US</h2>
    <p>Ektanagar Housing Society, Gokhale Nagar, Pune 411016</p>
    <p>Mobile - +91 8208095505</p>
    <p>Email - SwasthaApp@gmail.com</p>
    <p>Web Application Designed by PARVEJ MULANI</p>
</div>
</p>
</p>
 </>
);
}

