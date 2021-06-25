import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBus, faMapMarkerAlt, faParking, faShower, faWifi } from '@fortawesome/free-solid-svg-icons';
import './Homepage.scss'

const Homepage = () => {
    return (
        <Container>
            <Row>
                <Col className="propertyArea">
                    <div className="propertyImg">
                        <Carousel fade controls={false}>
                            <Carousel.Item>
                                <img src="https://source.unsplash.com/1600x900/?property1" alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://source.unsplash.com/1600x900/?property2" alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://source.unsplash.com/1600x900/?property3" alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="propertyInfo">
                        <h4>Amenities</h4>
                        <div className="propertyAmenities">
                            <span><FontAwesomeIcon icon={faBed} />3 Bedroom</span>
                            <span><FontAwesomeIcon icon={faShower} />Private Bathroom</span>
                            <span><FontAwesomeIcon icon={faWifi} />Free Wifi</span>
                        </div>
                        <div className="locationAmenities">
                            <span><FontAwesomeIcon icon={faBus} />1.2km Nearest Station</span>
                            <span><FontAwesomeIcon icon={faParking} />Free Available</span>
                            <a href="https://goo.gl/maps/UZtZ5nTvitU1esgUA" target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />Smithe St, Vancouver</a>
                        </div>
                    </div>
                    <div className="propertyButton">
                        <button>Details</button>
                    </div>
                </Col>
                <Col className="propertyArea">
                    <div className="propertyImg">
                        <img src="https://source.unsplash.com/1600x900/?property" alt="" />
                    </div>
                    <div className="propertyInfo">
                        <h4>Amenities</h4>
                        <div className="propertyAmenities">
                            <span><FontAwesomeIcon icon={faBed} />3 Bedroom</span>
                            <span><FontAwesomeIcon icon={faShower} />Private Bathroom</span>
                            <span><FontAwesomeIcon icon={faWifi} />Free Wifi</span>
                        </div>
                        <div className="locationAmenities">
                            <span><FontAwesomeIcon icon={faBus} />1.2km Nearest Station</span>
                            <span><FontAwesomeIcon icon={faParking} />Free Available</span>
                            <a href="https://goo.gl/maps/UZtZ5nTvitU1esgUA" target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />Smithe St, Vancouver</a>
                        </div>
                    </div>
                    <div className="propertyButton">
                        <button>Details</button>
                    </div>
                </Col>
                <Col className="propertyArea">
                    <div className="propertyImg">
                        <img src="https://source.unsplash.com/1600x900/?property" alt="" />
                    </div>
                    <div className="propertyInfo">
                        <h4>Amenities</h4>
                        <div className="propertyAmenities">
                            <span><FontAwesomeIcon icon={faBed} />3 Bedroom</span>
                            <span><FontAwesomeIcon icon={faShower} />Private Bathroom</span>
                            <span><FontAwesomeIcon icon={faWifi} />Free Wifi</span>
                        </div>
                        <div className="locationAmenities">
                            <span><FontAwesomeIcon icon={faBus} />1.2km Nearest Station</span>
                            <span><FontAwesomeIcon icon={faParking} />Free Available</span>
                            <a href="https://goo.gl/maps/UZtZ5nTvitU1esgUA" target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />Smithe St, Vancouver</a>
                        </div>
                    </div>
                    <div className="propertyButton">
                        <button>Details</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;