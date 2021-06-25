import React, { useEffect, useState, useContext } from "react";
import { Button } from 'react-bootstrap';
import { myContext } from '../context/Context';
import Detail from './Detail'



export default function Main() {
    
    const data = useContext(myContext);
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        data.dispatch({type:'CHECKOUT', payload:false});
    },[modalShow])
    

    return (
        <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch modal with grid
        </Button>
  
        <Detail show={modalShow} onHide={() => { setModalShow(false)}} />
        </>
    )
}
