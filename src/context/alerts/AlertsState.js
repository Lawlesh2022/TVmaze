// import { useReducer } from "react";
// import AlertsContext from './alertsContext'
// import AlertsReducer from './alertsReducer'
// import {SET_ALERT, REMOVE_ALERT} from '../types'

// import React from 'react'

// const AlertsState = (props) => {
//     const initialState = null;
//     const [state, dispatch] = useReducer(AlertsReducer, initialState);
//     const setAlert = (message, type) =>{
//         dispatch({
//             type: SET_ALERT,
//             playload: {
//                 message,
//                 type
//             }
//         })
//         setTimeout(()=> dispatch({type: REMOVE_ALERT}), 5000)
//     }
//   return (
//     <AlertsContext.Provider
//     value = {{}}
//     >
//      {props.children}
//     </AlertsContext.Provider>
//   )
// }

// export default AlertsState