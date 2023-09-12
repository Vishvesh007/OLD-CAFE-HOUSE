

	  import React, { Component } from 'react';
   
    import Axios from 'axios';
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
  
   export class News extends Component {
    state={newsData:[]};
    componentDidMount() {
      const URL="https://newsapi.org/v2/everything?q=tesla&from=2021-03-25&sortBy=publishedAt&apiKey=ee5408bbaf2242c28ba107b3d24d9be1"
      Axios.get(URL)
      .then(res=>
{
              this.setState({newsData:res.data.articles});
              console.log(res.data.articles)
          })
  }
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
      <div>
      <h1>Latest News</h1>
                {
this.state.newsData.map(news=>
                        <div>
                        <h3>{news.title}</h3>
                        <article>
                            <img src={news.urlToImage} width={400} height={150}/>
                            <br/>
                            {news.description}
                        </article>
                        </div>
                    )
                }
      </div>
    </div>
  
  
  )
  }
  
   }
  export default News;
  