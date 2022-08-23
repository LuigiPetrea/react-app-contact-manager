import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './page/home';
import ContactsList from './page/listContacts';
import NotFounde404 from "./page/404";
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element  = {<Home />}/>
            <Route exact path="/Contacts" element  = {<ContactsList />}/>
            <Route path="*" element  = {<NotFounde404 />}/>
        </Routes>
    </div>
  );
}

export default App;