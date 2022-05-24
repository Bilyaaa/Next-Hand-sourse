import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React from "react";
import './App.css'




function App() {
  
  return (
    
    <BrowserRouter>
      <Header />
      <AppRouter/>
    </BrowserRouter>
  
  );
}

export default App;
