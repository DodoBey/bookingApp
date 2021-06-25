// import React, { useEffect, useState, useContext } from "react";
// import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
// import { Calendar } from 'antd';
// import Checkout from './Checkout';
// import './Detail.scss';
// import 'antd/dist/antd.css';
// import { myContext } from '../context/Context';



// export default function Detail(props){

    
//     const data = useContext(myContext);
//     // const myData = data;
//     console.log(data);
//     function onPanelChange(value, mode) {
//         console.log(value, mode);
//       }
      
//     //   ReactDOM.render(
//     //     <div className="site-calendar-demo-card">
//     //       <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//     //     </div>,
//     //     mountNode,
//     //   );
//     //   .site-calendar-demo-card {
//     //     width: 300px;
//     //     border: 1px solid #f0f0f0;
//     //     border-radius: 2px;
//     //   }

//     return (
//         <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//               House 1
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body className="show-grid">
//           {!props.checkout ? (
//             <Container>
//               <Row>
//                   <Col md={10}>
//                       <p>Rating, Location</p>
//                   </Col>
//                   <Col md={2}>
//                       <p>Save</p>
//                   </Col>
//               </Row>
//               <Row style={{height:'400px'}}>
//                 <Col className='images' md={7}>
//                     <div className='image'/>
//                 </Col>
//                 <Col className='bookCol' md={5}>
//                   <div className='booking'>
//                       <h3>Add Dates for Prices</h3> 
//                       <div className="site-calendar-demo-card">
//                           <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//                       </div>
//                       <Button onClick={()=>props.handleCheckout(true)}>Checkout</Button>
//                   </div>
//                 </Col>
//               </Row>
    
//               <Row>
//                 <Col md={5}>
//                   <p>Host</p>
//                   <p>Details</p>
//                 </Col>
//                 <Col md={2}>
//                   <img alt='hostimg'/>
//                 </Col>
//               </Row>
              
//               <Row>
//                 <Col md={7}>
//                   Description
//                 </Col>
//                 <Col md={5}>
//                   Utilities
//                 </Col>
//               </Row>
//             </Container>
//             ):(
//             <Checkout/>
//           )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={props.onHide}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//     );
//   }
  