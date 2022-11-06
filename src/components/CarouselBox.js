import { log } from 'async';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carousel_Img_left from '../img/carousel.png';
import carousel_Img_center from '../img/carousel.png';
import carousel_Img_right from '../img/carousel.png';


export default class CarouselBox extends Component {
    render() {
        return (
           
            
                <Carousel>
                    <Carousel.Item interval={9000}>
                        <img  className="d-block w-100" src={carousel_Img_left} />
                    </Carousel.Item>

                    <Carousel.Item interval={9000}>
                        <img  className="d-block w-100" src={carousel_Img_center} />
                    </Carousel.Item>

                    <Carousel.Item interval={9000}>
                        <img  className="d-block w-100" src={carousel_Img_right} />
                    </Carousel.Item>

                </Carousel>

            
        )
    }
}