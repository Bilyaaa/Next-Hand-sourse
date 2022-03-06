import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './components/UserStore';
import DeviceStore from './components/DeviceStore';


export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider 
  value={{
    user: new UserStore(),
    device: new DeviceStore(),
    
    }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);



