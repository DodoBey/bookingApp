import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
import React, { useReducer, useState, useEffect } from 'react';
import Detail from '../components/Detail';
import houses from '../components/Houses'

export const myContext = React.createContext();


function reducer(state, action) {
    switch (action.type) {
      case 'CHECKOUT':
        return {
            ...state,
            checkout: action.payload
        };
      default:
          return {
              ...state
          };
    };
}



const initialState = houses;

export default function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <myContext.Provider value={{houses:state.houses, checkout:state.checkout, dispatch}}>
            {props.children}
        </myContext.Provider>
    )
}
