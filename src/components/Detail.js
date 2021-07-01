import React, { useEffect, useState, useContext } from "react";
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import Checkout from './Checkout';
import './Detail.scss';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import { myContext } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBus, faMapMarkerAlt, faParking, faShower, faWifi } from '@fortawesome/free-solid-svg-icons';



export default function Detail(props){
    const [date,setDate] = useState(formatDate(new Date));
    const [date2,setDate2] = useState(date);
    const [adults,setAdults] = useState(1);
    const [children,setChildren] = useState(0);
    const [house,setHouse] = useState(props.housedata);
    const [totalPrice,setTotalPrice] = useState('');
    const [numDays,setNumDays] = useState(1);
    const [available,setAvailable] = useState(false);
    const initialDate = new Date();
    const finalDate = new Date(2021, 11, 17);

    const data = useContext(myContext);

    function toggleCheckout(value){
      data.dispatch({type:'CHECKOUT', payload: value})
    }  
    function formatDate(date) {
      let d = date,
          month = '' + (d.getMonth() + 1),
          day = '' + (d.getDate()),
          year = d.getFullYear();
      // if ((d.getMonth() + 1 + months)>12) {year = d.getFullYear() + 1}
      // if ((d.getMonth() + 1 + months)<1) {year = d.getFullYear() - 1; month = 12 + parseInt(month)}
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
    }
    function parseDate(str) {
      let mdy = str.split('-');
      return new Date(mdy[0], mdy[1]-1, mdy[2] );
  }
  function datediff(first, second) {
      return Math.round((second-first)/(1000*60*60*24));
  }
    useEffect(()=>{
      setDate2(date);
    },[date])
    useEffect(()=>{
      console.log(parseDate(date));
      let days = datediff(parseDate(date),parseDate(date2));
      setNumDays(days);
    },[date2])
    useEffect(()=>{
      setHouse(props.housedata)
    },[props.housedata])
    useEffect(()=>{
      let total = numDays *(house.price * (0.8 + (0.2*adults + 0.1*children)));
      setTotalPrice(total);
    },[numDays, adults, children])
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {house.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
          {!data.checkout ? (
            <Container>
              <Row>
                  <Col md={10}>
                      <span>{house.address} <a href={house.map} target="blank"><FontAwesomeIcon icon={faMapMarkerAlt} />{house.adress}</a></span>
                  </Col>
                  <Col md={2}>
                      <p>Save</p>
                  </Col>
              </Row>
              <Row style={{height:'400px'}}>
                <Col className='images' md={7}>
                <Image.PreviewGroup>
                  {house.images.map((image)=>
                  <Image
                    width='24%'
                    src={image}
                  />
                  )}
                </Image.PreviewGroup>
                </Col>
                <Col className='bookCol' md={5}>
                  <div className='booking'>
                      <h5>Add Dates for Prices</h5> 
                      <div>
                        <input type="date" id="start" name="trip-start" placeholder='Check in'
                            value={date}
                            min={formatDate(initialDate)} max={formatDate(finalDate)} onChange={(e)=>{if(!house.unavailable.some(x=>x===e.target.value)){setDate(e.target.value);setAvailable(true)}else{setAvailable(false)}}}/>
                        <input type="date" id="end" name="trip-end"
                        value={date2}
                        min={date} max={formatDate(finalDate)} onChange={(e)=>{if(!house.unavailable.some((x)=>new Date(x)<=new Date(e.target.value)&&new Date(x)>=new Date(date))){setAvailable(true);setDate2(e.target.value)}else{setAvailable(false)}}}/>
                      </div>
                      <h6>Guests</h6>
                      <div className='guests'>
                        <div>
                          <span>Adults</span><button onClick={()=>{if(adults>1)setAdults(adults-1)}}>-</button><span>{adults}</span><button onClick={()=>{setAdults(adults+1)}}>+</button>
                        </div>
                        <div>
                          <span>Children</span><button onClick={()=>{if(children>0)setChildren(children-1)}}>-</button><span>{children}</span><button onClick={()=>{setChildren(children+1)}}>+</button>
                        </div>
                      </div>
                      {(totalPrice&&available) ?
                      <div className='totalPrice'>
                        <ul>
                          <li>${house.price} x {numDays} Nights</li>
                          <li>Service fee</li>
                          <li>Taxes</li>
                          <hr/>
                          <li><b>Total</b></li>
                        </ul>
                        <ul>
                          <li>${totalPrice.toFixed(2)}</li>
                          <li>${(totalPrice*0.1).toFixed(2)}</li>
                          <li>${(totalPrice*0.15).toFixed(2)}</li>
                          <hr/>
                          <li><b>${(totalPrice * 1.25).toFixed(2)} CAD</b></li>
                        </ul>  
                      </div>
                      :
                      <div>Unavailable dates</div>}
                      <Button onClick={()=>toggleCheckout(true)}>Checkout</Button>
                  </div>
                </Col>
              </Row>
    
              <Row>
                <Col md={5}>
                  ${house.price} CAD / night
                </Col>
                <Col md={2}>
                  <img alt='hostimg'/>
                </Col>
              </Row>
              
              <Row>
                <Col md={7}>
                  Description
                </Col>
                <Col md={5}>
                    <ul className="amenities">
                        <li><FontAwesomeIcon icon={faBed} />{house.bedrooms} Bedroom</li>
                        <li><FontAwesomeIcon icon={faShower} />{house.amenities.bathroom} Bathroom</li>
                        <li><FontAwesomeIcon icon={faWifi} />{house.amenities.wifi = true ? "Wifi Included" : "No Wifi"}</li>
                        {/* <li><FontAwesomeIcon icon={faBus} />{house.amenities.transportation}</li> */}
                        <li><FontAwesomeIcon icon={faParking} />{house.amenities.park = true ? "Parking Included" : "No Parking"}</li>
                    </ul>
                </Col>
              </Row>
            </Container>
            ):(
            <Checkout/>
          )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
  