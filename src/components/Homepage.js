import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBus, faFan, faMapMarkerAlt, faParking, faShower, faSink, faTshirt, faWifi } from '@fortawesome/free-solid-svg-icons';
import './Homepage.scss';
import { myContext } from '../context/Context';
import { Button } from 'react-bootstrap';
import Detail from './Detail';

const Homepage = () => {

    const ctxData = useContext(myContext);
    const [houseId, setHouseId] = useState(ctxData.houses[0]);
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        ctxData.dispatch({type:'CHECKOUT', payload:false});
    },[modalShow])

    const houses = ctxData.houses.map((house, key) => {
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
        };
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
                    <div>
                    <div className="propertyAmenities">
                        <span><FontAwesomeIcon icon={faBed} />{house.bedrooms} Bedroom</span>
                        <span><FontAwesomeIcon icon={faShower} />{house.amenities.bathroom} Bathroom</span>
                        <span><FontAwesomeIcon icon={faWifi} />{house.amenities.wifi ? "Wifi Included" : "No Wifi"}</span>
                    </div>
                    <div className="propertyAmenities">
                        <span><FontAwesomeIcon icon={faSink} />{house.amenities.kitchen ? "Kitchen Included" : "No Kitchen"}</span>
                        <span><FontAwesomeIcon icon={faTshirt} />{house.amenities.laundry ? "Laundry Included" : "No Laundry"}</span>
                        <span><FontAwesomeIcon icon={faFan} />{house.amenities.airconditioner ? "Air Conditioner Included" : "No Air Conditioner"}</span>
                    </div>
                    </div>
                    <div className="locationAmenities">
                        <span><FontAwesomeIcon icon={faBus} />{transportDistance}</span>
                        <span><FontAwesomeIcon icon={faParking} />{house.amenities.park ? "Parking Included" : "No Parking"}</span>
                        <a href={house.map} target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />{house.address}</a>
                    </div>
                </div>
                <div className="propertyButton">
                    {/* <button>Details</button> */}
                    <Button variant="primary" onClick={() => { setHouseId(house); setModalShow(true)}}>
                        Details
                    </Button>
                    <Detail show={modalShow} housedata={houseId} onHide={() => { setModalShow(false)}} />
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