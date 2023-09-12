

	  import React, { Component } from 'react';
      import './contact.css';
      import './venue.css';
      import { Card, Button, CardDeck, Container } from 'react-bootstrap';
      import v1 from '../assets/v1.jpg';
      import v2 from '../assets/v2.jpg';
      import v3 from '../assets/v3.jpg';
      import v4 from '../assets/v4.jpg';
      import v5 from '../assets/v5.jpg';
      import v6 from '../assets/v6.jpg';
      import v7 from '../assets/v7.jpg';
      import v8 from '../assets/v8.jpg';
      import  {Roll} from 'react-reveal'
      import banner1 from '../assets/banner1.jpg';
  import banner4 from '../assets/banner4.jpg';
  import banner2 from '../assets/banner2.gif';
  import banner3 from '../assets/banner3.gif';
  
  import  {LightSpeed,Rotate,Slide,Fade} from 'react-reveal';
  
  import Carousel from 'react-bootstrap/Carousel'
  
   export class Contact extends Component {
  render(){
    return( 
      <div>
        <Carousel fade id="carousl" >
                              <Carousel.Item class="carosltext">
                                  <Fade Right>
                                  <img
                                      className="d-block w-100 "
                                      class="images"
                                      src={banner1}
                                      alt="First slide"
                                  />
                                  </Fade>
                                
                                  <Carousel.Caption >
                                      <Fade Right>
                                      <h3 className="h3">Welcome to our Coffee House</h3>
                                      </Fade>
                                      <p className="p"> Explore with us the world filled with the beautiful Aroma of Freshly Made Coffee, from Bean to Cup.</p>
                                  </Carousel.Caption>
                              </Carousel.Item>
  
                              <Carousel.Item>
                                  <Fade Right>
                                  
                                  <img
                                      className="d-block w-100"
                                      class="images"
                                      src={banner2}
  
                                      alt="Second slide"
                                  />
  </Fade>
                                  <Carousel.Caption>
                                  <Fade Right>
                                      <h3 className="h3">Coffee Beans, the most important aspect of a flavour packed cup of coffee.</h3>
                                      </Fade>
                                      <p className="p">Explore and learn about the wide range of cofee beans...check out our cofee products in the Our Products tab.</p>
                                  </Carousel.Caption>
                              </Carousel.Item>
  
                              <Carousel.Item>
                                  <Fade Right>
                                  <img
                                      className="d-block w-100"
                                      class="images"
                                      src={banner3}
  
                                      alt="Third slide"
                                  />
  </Fade>
                                  <Carousel.Caption>
                                      <Fade Right>
                                      <h3 className="h3">Welcome to Latte Art</h3>
                                      </Fade>
                                      <p className="p">The best way to embellish a cup of coffee is through Latte Art.Check out the beautiful latte art by our professionals in Galleries tab.</p>
                                  </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                  <Fade Right>
                                  <img
                                      className="d-block w-100"
                                      class="images"
                                      src={banner4}
  
                                      alt="Third slide"
                                  />
  </Fade>
                                  <Carousel.Caption>
                                      <Fade Right>
                                      <h3 className="h33">Choose your Blend.</h3>
                                      </Fade>
                                      <p className="p">Explore the wide range of coffee products available and buy the best one for yourself from your cart.</p>
                                  </Carousel.Caption>
                              </Carousel.Item>
                          </Carousel>
                          {/* contact form */}
      <div className="container mt-5">
      <div className="tm-main-section light-gray-bg">
      <div className="container" id="main">
        <section className="tm-section row">
          <h2 className="col-lg-12 margin-bottom-30" style={{color:'#dda24f'}}><b>Send us a message</b></h2>
          <form action="#" method="get" className="tm-contact-form">
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
              <input type="text" id="contact_name" className="form-control1" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" id="contact_email" className="form-control1" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <input type="text" id="contact_subject" className="form-control1" placeholder="Subject" />
              </div>
              <div className="form-group">
 <textarea id="contact_message" className="form-control1" rows="6" placeholder="Your Message"></textarea>
              </div>
              <div className="form-group">
                <button className="tm-more-button" type="submit" name="submit">Send message</button> 
              </div>               
            </div><hr className="Hrule"></hr>
            <div className="form-group">
                <label className="tm-more-button">Address: A-34/1143 Main Street, New Colony,10030<br></br>Contact: 9501252557</label> 
              </div> 
            <div className="col-lg-6 col-md-6">
              <div id="google-map"></div>
            </div> 
          </form>
        </section>
      </div>
    </div> 
              
        </div>
    </div>
  
  
  )
  }
  
   }
  export default Contact;
  