import React, { useReducer, useState, useEffect } from 'react';
import Detail from '../components/Detail';

export const myContext = React.createContext();


const initialState = {
    houses: [{
        title: 'House 1',
        address: 'here',
        price: 10000,
        available: true,
        amenities:{
            kitchen:true,
            laundry:true,
            wifi:false,
            park:false
        },
        // lat: 10.000,
        // lon: 14.555
        initialDate: new Date(),
        finalDate: new Date(2021, 11, 17)
    }],
    checkout: false
}

function reducer(state, action) {
    switch (action.type) {
      case 'CHECKOUT':
        return {
            ...state,
            checkout: action.payload
        };
    //   case '':
    //     return {count: state.count - 1};
    //   case '':
    //     return init(action.payload);
      default:
        throw new Error();
    }
  }
  

export default function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);


    return(
        <myContext.Provider value={{houses:state.houses, checkout:state.checkout, dispatch}}>
            {props.children}
        </myContext.Provider>
    )
}
