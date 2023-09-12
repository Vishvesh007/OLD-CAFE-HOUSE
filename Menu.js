

	  import React, { Component } from 'react';

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
      import card6 from '../assets/card6.jpg';
import card7 from '../assets/card7.jpg';
import card8 from '../assets/card8.jpeg';
import card9 from '../assets/card9.jpg';
import card10 from '../assets/card10.jpeg';
import card11 from '../assets/card11.jpg';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
      import  {Roll} from 'react-reveal'
      import banner1 from '../assets/banner1.jpg';
  import banner4 from '../assets/banner4.jpg';
  import banner2 from '../assets/banner2.gif';
  import banner3 from '../assets/banner3.gif';
  import g5 from '../assets/g5.webp';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.webp';
  
  import  {LightSpeed,Rotate,Slide,Fade,Zoom} from 'react-reveal';
  
  import Carousel from 'react-bootstrap/Carousel'
  
   export class Menu extends Component {
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
                          {/* Menu */}
      <Container>
      <Zoom Top><h2 id="mh2">Our Menu</h2></Zoom>
        <CardDeck >
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary" className="vc">
           
          <Roll Top> 
          
            <Card.Img className="cimg" variant="top" src={card8} />
            <Card.Body>
        
              <Card.Title className="vtitle"><b>Caffe` Americano</b></Card.Title>
              <Card.Text className="ctext" >
              
              Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.
                </Card.Text>
  
  <Button style={{backgroundColor:'#13274F'}}>Rs. 230</Button>
  
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
            <Roll Top>
            <Card.Img className="cimg" variant="top" src={card9} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Cafe Frappe</b></Card.Title>
              <Card.Text className="ctext">
              The all-time favourite Cafe Frappe. Rich, creamy and irresistably cold coffee, that will never go out of style.
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 300</Button>
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
            <Card.Img className="cimg" variant="top" src={card10} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Café Latte</b></Card.Title>
              <Card.Text className="ctext">
              Café Latte. A light coffee accompanied by a shot of Espresso and complimented with steamed milk.
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 290</Button>
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
            <Roll Top>
            <Card.Img className="cimg" variant="top" src={card11} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Café Mocha</b></Card.Title>
              <Card.Text className="ctext">
              A combination of rich espresso, with a sinful chocolate sauce and steamed milk.
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 340</Button>
            </Card.Body>
            </Roll>
          </Card>
        </CardDeck>
        {/* card deck2 */}
        <CardDeck style={{ marginTop: '10px' }}>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
            <Card.Img className="cimg" variant="top" src={g5} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Red Velvet</b></Card.Title>
              <Card.Text className="ctext">
              Our Red Velvet Cake is instantly recognizable with its bright red color offset by a white Cream Cheese Frosting
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 180/pc</Button>
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
            <Roll Top>
            <Card.Img className="cimg" variant="top" src={g6} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Croissants</b></Card.Title>
              <Card.Text className="ctext">
              Our Croissants are flaky, buttery layered French pastry with chocolate filling
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 190/pc</Button>
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
            <Card.Img className="cimg" variant="top" src={g7} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Chocolate Truffle Cake</b></Card.Title>
              <Card.Text className="ctext">
              A chocolate layer cake with dense, moist chocolate cake, silky chocolate truffle frosting and chocolate flakes.
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 230/pc</Button>
  
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px'  }} border="primary">
  <Roll Top>
            <Card.Img className="cimg" variant="top" src={g8} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Caramel Puff Pastry</b></Card.Title>
              <Card.Text className="ctext">
              Hot, golden squares of puff pastry stuffed with milk chocolate and then drizzled with caramel sauce and sprinkled with salt.
  </Card.Text>
              <Button style={{backgroundColor:'#13274F'}}>Rs. 300</Button>
            </Card.Body>
            </Roll>
          </Card>
  
  
        </CardDeck>
        {/* card deck3 */}
        <CardDeck style={{ marginTop: '10px' }}>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
            <Card.Img className="cimg" variant="top" src={f1} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Blueberry Pie</b></Card.Title>
              <Card.Text className="ctext">
              Our blueberry pie with warm spices, lemon and a lattice crust
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 170/pc</Button>
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
            <Roll Top>
            <Card.Img className="cimg" variant="top" src={f2} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Apple Pie</b></Card.Title>
              <Card.Text className="ctext">
              It has a flaky, buttery crust and a tender, lightly-spiced apple pie filling. Served with aside of ice-cream.
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 130/pc</Button>
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
            <Card.Img className="cimg" variant="top" src={f3} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Cherry Pie</b></Card.Title>
              <Card.Text className="ctext">
              This Sweet Cherry Pie, made using frozen cherries, is the best dessert,Balanced out with lemon and accented with almond
  </Card.Text>
  <Button style={{backgroundColor:'#13274F'}}>Rs. 150/pc</Button>
  
            </Card.Body>
            </Roll>
          </Card>
          <Card style={{ height: '60vh', marginTop: '10px'  }} border="primary">
  <Roll Top>
            <Card.Img className="cimg" variant="top" src={f4} />
            <Card.Body>
              <Card.Title className="vtitle"><b>Chocolate Pie</b></Card.Title>
              <Card.Text className="ctext">
              A light and airy chocolate cream using dark chocolate chips fills a baked pie crust and gets topped with a dollop of whipped creme. 
  </Card.Text>
              <Button style={{backgroundColor:'#13274F'}}>Rs. 130/pc</Button>
            </Card.Body>
            </Roll>
          </Card>
  
  
        </CardDeck>
      </Container>
    </div>
  
  
  )
  }
  
   }
  export default Menu;
  