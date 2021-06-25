import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
import React, { useReducer, useState, useEffect } from 'react';
import Detail from '../components/Detail';
import houses from '../components/Houses'

export const myContext = React.createContext();
// export const Consumer = Context.Consumer;


const initialState = houses;

function reducer(state, action) {
    // switch (action.type) {
    //   case '':
    //     return {count: state.count + 1};
    //   case '':
    //     return {count: state.count - 1};
    //   case '':
    //     return init(action.payload);
    //   default:
    //     throw new Error();
    // }
  }
  

export default function Provider(props) {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <myContext.Provider value={state.houses}>
            {props.children}
        </myContext.Provider>
    )
}
