import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBus, faMapMarkerAlt, faParking, faShower, faWifi } from '@fortawesome/free-solid-svg-icons';
import './Homepage.scss';
import { myContext } from '../context/Context';
import { Button } from 'react-bootstrap';
import Detail from './Detail';

const Homepage = () => {

    const ctxData = useContext(myContext);
    console.log(ctxData)

    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        ctxData.dispatch({type:'CHECKOUT', payload:false});
    },[modalShow])

    const houses = ctxData.houses.map((house, key) => {
        console.log(house.amenities.transportation)
            const transport = house.amenities.transportation;
        var transportDistance = ""
        switch(transport) {
            case (transport.close === true) :
                transportDistance = "Less than 500m to Closest Public Transportation";
                break;
            case (transport.mid === true) :
                transportDistance = "Less than 2km to Closest Public Transportation";
                break;
            case transport.far === true :
                transportDistance = "More than 2km to Closest Public Transportation"
                break;
            default:
                transportDistance = "No Data"
        }
        return (
            <Col className="propertyArea" key={Math.random}>
                <div className="propertyImg">
                    <Carousel fade controls={false}>
                        {house.images.map((image, key) => {
                            <Carousel.Item key={Math.random}>
                                <img src={image} alt="" />
                            </Carousel.Item>
                        })}
                    </Carousel>
                </div>
                <div className="propertyInfo">
                    <h4>{house.title}</h4>
                    <div className="propertyAmenities">
                        <span><FontAwesomeIcon icon={faBed} />{house.bedroom} Bedroom</span>
                        <span><FontAwesomeIcon icon={faShower} />{house.amenities.bathroom} Bathroom</span>
                        <span><FontAwesomeIcon icon={faWifi} />{() => house.amenities.wifi = true ? "Wifi Included" : "No Wifi"}</span>
                    </div>
                    <div className="locationAmenities">
                        <span><FontAwesomeIcon icon={faBus} />{transportDistance}</span>
                        <span><FontAwesomeIcon icon={faParking} />{() => house.amenities.park = true ? "Parking Included" : "No Parking"}</span>
                        <a href={house.map} target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />{house.adress}</a>
                    </div>
                </div>
                <div className="propertyButton">
                    {/* <button>Details</button> */}
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Details
                    </Button>
                    <Detail show={modalShow} onHide={() => { setModalShow(false)}} />
                </div>
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                    {houses}
                {/* <Col className="propertyArea">
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
                </Col> */}
            </Row>
        </Container>
    )
}

export default Homepage;