import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Main from './components/Main';
import Provider from './context/Context';

function App() {
  
  
    return (
      <>
      <Provider>
        <Main/>
      </Provider>
      </>
    );
}

export default App;
