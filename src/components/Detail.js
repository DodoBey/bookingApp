import React, { useEffect, useState, useContext } from "react";
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import { Calendar } from 'antd';
import Checkout from './Checkout';
import './Detail.scss';
import 'antd/dist/antd.css';
import { myContext } from '../context/Context';
import { ListContext } from "antd/lib/list";



export default function Detail(props){
    const [date,setDate] = useState(formatDate(0));
    const [date2,setDate2] = useState(date);
    const [adults,setAdults] = useState(1);
    const [children,setChildren] = useState(0);
    const data = useContext(myContext);

    function toggleCheckout(value){
      data.dispatch({type:'CHECKOUT', payload: value})
    }  
    function formatDate(months) {
      let d = new Date(),
          month = '' + (d.getMonth() + 1 + months)%12,
          day = '' + (d.getDate()),
          year = d.getFullYear();
      if ((d.getMonth() + 1 + months)>12) {year = d.getFullYear() + 1}
      if ((d.getMonth() + 1 + months)<1) {year = d.getFullYear() - 1; month = 12 + parseInt(month)}
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
    }
    useEffect(()=>{
      setDate2(date)
    },[date])
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              House 1
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
          {!data.checkout ? (
            <Container>
              <Row>
                  <Col md={10}>
                      <p>Rating, Location</p>
                  </Col>
                  <Col md={2}>
                      <p>Save</p>
                  </Col>
              </Row>
              <Row style={{height:'400px'}}>
                <Col className='images' md={7}>
                    <div className='image'/>
                </Col>
                <Col className='bookCol' md={5}>
                  <div className='booking'>
                      <h3>Add Dates for Prices</h3> 
                      <div>
                        <input type="date" id="start" name="trip-start" placeholder='Check in'
                            value={date}
                            min={formatDate(0)} max={formatDate(12)} onChange={(e)=>setDate(e.target.value)}/>
                        <input type="date" id="end" name="trip-end"
                        value={date2}
                        min={date} max={formatDate(12)} onChange={(e)=>setDate2(e.target.value)}/>
                      </div>
                      <h6>Guests</h6>
                      <div>
                        <span>Adults</span><button onClick={()=>{if(adults>1)setAdults(adults-1)}}>-</button><span>{adults}</span><button onClick={()=>{setAdults(adults+1)}}>+</button>
                      </div>
                      <div>
                        <span>Children</span><button onClick={()=>{if(children>0)setChildren(children-1)}}>-</button><span>{children}</span><button onClick={()=>{setChildren(children+1)}}>+</button>
                      </div>
                      <Button onClick={()=>toggleCheckout(true)}>Checkout</Button>
                  </div>
                </Col>
              </Row>
    
              <Row>
                <Col md={5}>
                  <p>Host</p>
                  <p>Details</p>
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
                  Utilities
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
  