import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import './Carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles, faSmile, faUserShield } from '@fortawesome/free-solid-svg-icons';

const CarouselComp = () => {
    return (
        <>
            <Container className="carouselArea">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/1920x1080/?holiday" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/1920x1080/?holiday1" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/1920x1080/?holiday2" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/1920x1080/?holiday3" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://source.unsplash.com/1920x1080/?holiday4" alt="" />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <div className="bannerBorder">
                <Container>
                    <div className="bannerArea">
                        <div>
                            <FontAwesomeIcon className="icons" icon={faUserShield} />
                            <p>100% Secure Transaction</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className="icons" icon={faSmile} />
                            <p>Satisfaction Guarantee</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className="icons" icon={faHandSparkles} />
                            <p>Clean and Sanitized Places</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default CarouselComp;