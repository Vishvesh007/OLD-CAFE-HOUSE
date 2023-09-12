import React, { Component } from 'react';
import About from './About';
import './home.css';
import banner1 from '../assets/banner1.jpg';
import banner4 from '../assets/banner4.jpg';
import banner2 from '../assets/banner2.gif';
import banner3 from '../assets/banner3.gif';
import Services from './Services';

import Carousel from 'react-bootstrap/Carousel'

import  {Roll,LightSpeed,Rotate,Slide,Fade} from 'react-reveal';
export class Home extends Component {
    render() {
        return (
                    <div id="body">
                        
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

                        <About />
                        <Services/>

                    </div>
        )
    }
}

export default Home