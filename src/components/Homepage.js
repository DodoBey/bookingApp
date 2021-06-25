import { useContext } from 'react';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBus, faMapMarkerAlt, faParking, faShower, faWifi } from '@fortawesome/free-solid-svg-icons';
import './Homepage.scss';
import { myContext } from '../context/Context';

const Homepage = () => {

    const ctxData = useContext(myContext);
    console.log(ctxData)

    const houses = ctxData.map((house, key) => {
        const transport = house.amenities.transportation;
        var transportDistance = ""
        switch (transport) {
            case "close":
                transportDistance = "Less than 500m to Closest Public Transportation";
                break;
            case "mid":
                transportDistance = "Less than 2km to Closest Public Transportation";
                break;
            case "far":
                transportDistance = "More than 2km to Closest Public Transportation"
                break;
            default:
                transportDistance = "No Data"
        }
        console.log(house.id)
        return (
            <Col className="propertyArea" key={house.id}>
                <div className="propertyImg">
                    <Carousel fade controls={false}>
                        {house.images.map((image, key) => {
                            return (
                                <Carousel.Item>
                                    <img src={image} alt="" />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
                <div className="propertyInfo">
                    <h4>{house.title}</h4>
                    <div className="propertyAmenities">
                        <span><FontAwesomeIcon icon={faBed} />{house.bedrooms} Bedroom</span>
                        <span><FontAwesomeIcon icon={faShower} />{house.amenities.bathroom} Bathroom</span>
                        <span><FontAwesomeIcon icon={faWifi} />{house.amenities.wifi ? "Wifi Included" : "No Wifi"}</span>
                    </div>
                    <div className="locationAmenities">
                        <span><FontAwesomeIcon icon={faBus} />{transportDistance}</span>
                        <span><FontAwesomeIcon icon={faParking} />{house.amenities.park ? "Parking Included" : "No Parking"}</span>
                        <a href={house.map} target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />{house.address}</a>
                    </div>
                </div>
                <div className="propertyButton">
                    <button>Details</button>
                </div>
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                {houses}
            </Row>
        </Container>
    )
}

export default Homepage;