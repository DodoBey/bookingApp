import React, { useReducer, useEffect } from 'react';
import houses from '../components/Houses'

export const myContext = React.createContext();


function reducer(state, action) {
    switch (action.type) {
      case 'CHECKOUT':
        return {
            ...state,
            checkout: action.payload
        };
      case 'UNAVAILABLE_DATES':
          for (let house of state.houses) {
              if (house.id===action.payload.id) {
                 house.unavailable.push(...action.payload.dates); 
              }
          }
          localStorage.setItem('houses',JSON.stringify(state.houses))
        return {
            ...state
        };
      case 'GET_HOUSES':
          return {
              ...state,
              houses: action.payload
          }
      default:
          return {
              ...state
          };
    };
}

const initialState = houses;

export default function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        if (localStorage.getItem('houses')) {
            dispatch({type: 'GET_HOUSES', payload: JSON.parse(localStorage.getItem('houses'))})
        }
    },[])

    return(
        <myContext.Provider value={{houses:state.houses, checkout:state.checkout, dispatch}}>
            {props.children}
        </myContext.Provider>
    )
}
