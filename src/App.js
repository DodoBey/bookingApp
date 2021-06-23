import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Detail from './components/Detail'

function App() {
  const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch modal with grid
        </Button>
  
        <Detail show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
}

export default App;
