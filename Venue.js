

	  import React, { Component } from 'react';

    import './venue.css';
    import { Card, Button, CardDeck, Container } from 'react-bootstrap';
    import v1 from '../assets/v1.jpg';
    import v2 from '../assets/v2.jpg';
    import v3 from '../assets/v3.jpg';
    import v4 from '../assets/v4.jpg';
    import v5 from '../assets/v5.jpg';
    import v6 from '../assets/v6.jpg';
    import v7 from '../assets/v7.webp';
    import v8 from '../assets/v8.jpg';
    import  {Roll} from 'react-reveal'
    import banner1 from '../assets/banner1.jpg';
import banner4 from '../assets/banner4.jpg';
import banner2 from '../assets/banner2.gif';
import banner3 from '../assets/banner3.gif';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.webp';
import card6 from '../assets/card6.jpg';
import card7 from '../assets/card7.jpg';
import card8 from '../assets/card8.jpeg';

import  {LightSpeed,Rotate,Slide,Fade,Zoom} from 'react-reveal';

import Carousel from 'react-bootstrap/Carousel'

 export class Venue extends Component {
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
                        {/* products */}
    <Container>
    <Zoom Top>
                        <h2 className="h2">Our Products</h2>
                        </Zoom>
      <CardDeck >
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary" className="vc">
        <Roll Top> 
          <Card.Img className="cimg" variant="top" src={card4} />
          <Card.Body>
      
            <Card.Title className="vtitle"><b>Davidoff Café Instant Coffee, 100 Gram </b></Card.Title>
            <Card.Text className="ctext" >

            Its pleasantly robust body is punctuated by a mildly acidic aftertaste
    Bean,type: 100 percent arabica
    Rich aroma
              </Card.Text>

<Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>

          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
          <Card.Img className="cimg" variant="top" src={card5} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Continental Strong Coffee Powder 1Kg Bag</b></Card.Title>
            <Card.Text className="ctext">
            Strong Coffee : 53% Coffee - 47% Chicory,
    Fresh aroma for a rich coffee experience
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
        <Roll Top>
          <Card.Img className="cimg" variant="top" src={card6} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Nestle 400g Coffee Mate Richer & Creamer</b></Card.Title>
            <Card.Text className="ctext">
            Capcity: 400g
    Coffee Mate Richer,
    It gives coffee a milky and creamy taste

</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
          <Card.Img className="cimg" variant="top" src={card7} />
          <Card.Body>
            <Card.Title className="vtitle"><b>NESCAFÉ Latté Instant Coffee Premix</b></Card.Title>
            <Card.Text className="ctext">
            5 sachets x 25g
                                 Latte, with a perfect blend of coffee, milk and sugar put together for you in every sachet 
    
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>
          </Card.Body>
          </Roll>
        </Card>
      </CardDeck>
      <CardDeck style={{ marginTop: '10px' }}>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
        <Roll Top>
          <Card.Img className="cimg" variant="top" src={v5} />
          <Card.Body>
            <Card.Title className="vtitle"><b>illy Intenso Bold Roast 100% Arabica Whole Beans, 250g </b></Card.Title>
            <Card.Text className="ctext">
             
    illy Intenso Bold Roast 
    Percentages of coffee blends used: 100 % Arabica
    

</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
          <Roll Top>
          <Card.Img className="cimg" variant="top" src={v6} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Lavazza Caffè Espresso Coffee, Medium Roast, 250 g</b></Card.Title>
            <Card.Text className="ctext">
            Blend of specially selected Arabica from south America & Africa
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>
          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px' }} border="primary">
        <Roll Top>
          <Card.Img className="cimg" variant="top" src={v7} />
          <Card.Body>
            <Card.Title className="vtitle"><b>Urban Platter Roasted Robusta Coffee Beans, 250g</b></Card.Title>
            <Card.Text className="ctext">
            Finest quality Robusta Coffee from Travancore, Kerala, lovely, velvety Coffee.
</Card.Text>
<Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>

          </Card.Body>
          </Roll>
        </Card>
        <Card style={{ height: '60vh', marginTop: '10px'  }} border="primary">
<Roll Top>
          <Card.Img className="cimg" variant="top" src={v8} />
          <Card.Body>
            <Card.Title className="vtitle"><b> Hill Bean - Premium Single Estate Coffee </b></Card.Title>
            <Card.Text className="ctext">
            | Estate Blend | 60% Arabica 40% Robusta | Pure Filter Coffee Powder, Strong Strength, 250 GMS 
</Card.Text>
            <Button style={{backgroundColor:'#13274F'}}>Add to cart</Button>
          </Card.Body>
          </Roll>
        </Card>


      </CardDeck>
    </Container>
  </div>


)
}

 }
export default Venue;
