import { useContext } from 'react';
import { myContext } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faChild, faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Checkout.scss'


const Checkout = (props) => {
    const data = useContext(myContext);
    
    const paymentAlert = () => {
        alert("Payment Successful!");
    }

    console.log(props.hide)
    return (
        <Container className="checkoutMain">
            <FontAwesomeIcon icon={faArrowLeft} onMouseOver={(e) => e.target.style.cursor = 'pointer'} onClick={() => data.dispatch({ type: 'CHECKOUT', payload: false })} />
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
                                <Col lg={6} md={6} className="inputForms">
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
                            <img src={props.img} />
                        </div>
                        <div className="guestInfo">
                            <span><FontAwesomeIcon icon={faCalendar} />{props.days} Nights</span>
                            <span><FontAwesomeIcon icon={faUser} />{props.adults} Adults</span>
                            <span><FontAwesomeIcon icon={faChild} />{props.children} Child</span>
                        </div>
                        <div className="paymentArea">
                            <div className="price">
                                <span>Total Price (Including Tax) =</span>
                                <span>{props.price} CAD</span>
                            </div>
                            <button onClick={() => {data.dispatch({ type: 'UNAVAILABLE_DATES', payload: { id: props.id, dates: props.dates } }); paymentAlert(); props.hide() }} >PAY</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;