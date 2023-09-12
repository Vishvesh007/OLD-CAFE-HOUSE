import React, { Component } from 'react';

import card from '../assets/card.jpg';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.webp';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
// import card5 from '../assets/card5.webp';
// import card6 from '../assets/card6.jpg';
// import card7 from '../assets/card7.jpg';
// import card8 from '../assets/card8.jpeg';
// import card9 from '../assets/card9.jpg';
// import card10 from '../assets/card10.jpeg';
// import card11 from '../assets/card11.jpg';


import { Card, CardDeck } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
// import Roll from 'react-reveal/Roll';
import  {Fade,Zoom} from 'react-reveal';
// import  {Pulse} from 'react-reveal/Pulse';
export class Services extends Component {
    render(){
      return( 
          <div>
              
               <div class="container" id="ourservices">
                   <Zoom Top>
                        <h2 className="h2">About Us</h2>
                        </Zoom>
                 </div>
              <div class ="container" id="cards"  >
             
                        <CardDeck >
                            <Card className="card1" border="transparent" >
                               <Card.Link href ="/Galleries">
                                   <Zoom Top>
                                {/* <Card.Img  class="cimg" variant="top"  src={card}  /> */}
                                <Card.Body>
                                
                                <Card.Title className="ctitle"><b>Old Town Cafe`: From Bean to Cup</b></Card.Title>
                                <Card.Text className="ctext">
                                <i>As our motto suggests, we make every cup of coffe from scratch,everything from choosing the best coffee beans ,creating and grinding our own blends to a beautiful Aromatic cup of Coffee that is served to you with all our Love. 
                                Our Beautiful Ambience adds perfectly to the experience of our customers, whom we treat like Family.
                                We also offer a range of coffee products: Coffee Beans, blends, Creamers etc., customers can buy products from our cart system.
                                We also offer the option of venue booking for your special occasions.
                                </i>
                                </Card.Text>
                                
                                <Card.Img  class="cimg" variant="top"  src={card4}  />
                                <Card.Img  class="cimg" variant="top"  src={card1}  />
                                <Card.Img  class="cimg" variant="top"  src={card2}  />
                                <Card.Img  class="cimg" variant="top"  src={card3}  />
                                
                                </Card.Body>
                                </Zoom>
                                </Card.Link>
                            </Card>
                            </CardDeck>
                            {/* <Card className="card1" border="primary">
                                <Zoom Top>
                            <Card.Img  className="cimg" variant="top" src={card1}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Ambience</b></Card.Title>
                                <Card.Text className="ctext">
                                Allow us to make every occation of yours even more delightful with the beautiful ambiance and service.
                                </Card.Text>
                                </Card.Body>
                                </Zoom>
                            </Card>

                            <Card className="card1" border="primary">
                           
                            <Card.Img  class="cimg" variant="top" src={card2}  />
                                <Card.Body>
                                    <Zoom Top>
                                <Card.Title className="ctitle"><b> Our Menu</b></Card.Title>
                                <Card.Text className="ctext">
                                Our thoughtfully planned menu is sure to make your every occasion a memorable one for you and your guests.
                                </Card.Text>
                                </Zoom>
                                </Card.Body>
                              
                            </Card>
                                
                            <Card className="card1" border="primary">
                                <Zoom Top>
                            <Card.Img  class="cimg" variant="top" src={card3}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Our Service</b></Card.Title>
                                <Card.Text className="ctext">
                                Our customers are like our family. Our job is to serve you up with the best customer experience.
                                </Card.Text>
                                </Card.Body>
                                </Zoom>
                            </Card>
                        </CardDeck>
                        {/*  2nd card */}
                        {/* <h4 className="h4">Product Gallery</h4>
                        <CardDeck>
                        <Card className="card1" border="primary">
                           
                            <Card.Img  class="cimg" variant="top" src={card4}  />
                                <Card.Body>
<Zoom Top>
                                <Card.Title className="ctitle"><b>Davidoff Café Instant Coffee, 100 Gram </b></Card.Title>
                                <Card.Text className="ctext">
    Its pleasantly robust body is punctuated by a mildly acidic aftertaste
    Bean,type: 100 percent arabica
    Rich aroma

                                </Card.Text>
                                </Zoom>
                                </Card.Body>
                              
                            </Card>

                            <Card className="card1" border="primary">
<Zoom Top>
                            <Card.Img  class="cimg" variant="top" src={card5}  />
                                <Card.Body>
                                    <Zoom Top>
                                <Card.Title className="ctitle"><b>Continental Strong Coffee Powder 1Kg Bag </b></Card.Title>
                                <Card.Text className="ctext">
                               
    Strong Coffee : 53% Coffee - 47% Chicory,
    Fresh aroma for a rich coffee experience
  

</Card.Text>
                                </Zoom>
                                </Card.Body>
                                </Zoom>
                            </Card>

                            <Card className="card1" border="primary">
                                
                            <Card.Img  class="cimg" variant="top" src={card6}  />
                                <Card.Body>
                                    <Zoom Top>
                                <Card.Title className="ctitle"><b>Nestle 400g Coffee Mate Richer & Creamer </b></Card.Title>
                                <Card.Text className="ctext">
    Capcity: 400g
    Coffee Mate Richer,
    It gives coffee a milky and creamy taste

                              {' '}
                                </Card.Text>
                                </Zoom>
                                </Card.Body>
                               
                            </Card>
                                
                            <Card className="card1" border="primary">
                                <Zoom Top>
                            <Card.Img  class="cimg" variant="top" src={card7}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>NESCAFÉ Latté Instant Coffee Premix</b></Card.Title>
                                <Card.Text className="ctext">
                                 5 sachets x 25g
                                 Latte, with a perfect blend of coffee, milk and sugar put together for you in every sachet 
    

                                </Card.Text>
                                </Card.Body>
                                </Zoom>
                            </Card>
                        </CardDeck> */}
                        {/* 3rd card */}
                        {/* <h4 className="h4">Our Menu</h4>
                        <CardDeck>
                        <Card className="card1" border="primary">
                            <Zoom Top>
                            <Card.Img  class="cimg" variant="top" src={card8}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Caffe` Americano</b></Card.Title>
                                <Card.Text className="ctext">
                                Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.
                                </Card.Text>
                                </Card.Body>
                                </Zoom>
                            </Card>

                            <Card className="card1" border="primary">
                              
                            <Card.Img  class="cimg" variant="top" src={card9}  />
                                <Card.Body>
                                    <Zoom Top>
                                <Card.Title className="ctitle"><b>Cafe Frappe</b></Card.Title>
                                <Card.Text className="ctext">
                                The all-time favourite Cafe Frappe. Rich, creamy and irresistably cold coffee, that will never go out of style.{' '}
                                </Card.Text>
                                </Zoom>
                                </Card.Body>
                               
                            </Card>

                            <Card className="card1" border="primary">
                                <Zoom Top>
                            <Card.Img  class="cimg" variant="top" src={card10}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Café Latte</b></Card.Title>
                                <Card.Text className="ctext">
                                Café Latte. A light coffee accompanied by a shot of Espresso and complimented with steamed milk. {' '}
                                </Card.Text>
                                </Card.Body>
                                </Zoom>
                            </Card>
                                
                            <Card className="card1" border="primary">
                                <Zoom Top>
                            <Card.Img  class="cimg" variant="top" src={card11}  />
                                <Card.Body>
                                <Card.Title className="ctitle"><b>Café Mocha</b></Card.Title>
                                <Card.Text className="ctext">
                                A combination of rich espresso, with a sinful chocolate sauce and steamed milk. 
                                </Card.Text>
                                </Card.Body>
                                </Zoom>
                            </Card>
                            
                        </CardDeck> */} 
                        
                 </div>
               
            </div>
            
      );
    }
}

export  default Services

