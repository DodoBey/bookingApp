import { useContext, useEffect, useState } from 'react';
import { myContext } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChild, faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col} from 'react-bootstrap';
import './Checkout.scss'


const Checkout = () => {
    const data = useContext(myContext);
    console.log(data)
    return (
        <Container className="checkoutMain">
            <Row>
            <Col lg={8} md={8} className="checkoutLeft">
            <Row className="formArea">
                <h5>Personal Information</h5>
                <Col lg={12} md={12}>
                    <Row className="personalInfo">
                    <Col lg={6} md={6} className="inputForms">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </Col>
                    <Col lg={6}md={6} className="inputForms">
                    <label htmlFor="">Lastname</label>
                        <input type="text" />
                    </Col>
                    <Col lg={6} md={6} className="inputForms">
                    <label htmlFor="">Date of Birth</label>
                        <input type="date" />
                    </Col>
                    <Col lg={6} md={6} className="inputForms">
                    <label htmlFor="">Email</label>
                        <input type="text" />
                    </Col>
                    <Col lg={6} md={6} className="inputForms">
                    <label htmlFor="">Phone Number</label>
                        <input type="number" />
                    </Col>
                    <Col lg={6} md={6} className="inputForms">
                    <label htmlFor="">Address</label>
                        <input type="text" />
                    </Col>
                    </Row>
                </Col>
                <h5>Card Information</h5>
                <Col lg={12} md={12} className="paymentInfo">
                    <Row>
                    <Col lg={12} md={12} className="inputForms">
                        <label htmlFor="">Name on Card</label>
                        <input type="text" />
                    </Col>
                    <Col lg={12} md={12} className="inputForms">
                    <label htmlFor="">Card Number</label>
                        <input type="text" />
                    </Col>
                    <Col lg={6} md={6} className="inputForms">
                    <label htmlFor="">Date of Expire</label>
                        <input type="date" />
                    </Col>
                    <Col lg={6} md={6} className="inputForms">
                    <label htmlFor="">CVC</label>
                        <input type="number" />
                    </Col>
                    </Row>
                </Col>
            </Row>
            </Col>
            <Col lg={4} md={4} className="checkoutRigt">
            <div >
                <div className="information">
                    <img src="https://source.unsplash.com/1600x900/?property1" />
                </div>
                <div className="guestInfo">
                    <span><FontAwesomeIcon icon={faCalendar} />7 Nights</span>
                    <span><FontAwesomeIcon icon={faUser} />2 Adults</span>
                    <span><FontAwesomeIcon icon={faChild} />1 Child</span>
                </div>
                <div className="paymentArea">
                    <div className="price">
                        <span>Total Price (Including Tax) =</span>
                        <span>1370 Cad</span>
                    </div>
                    <button>PAY</button>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
    )
}

export default Checkout;