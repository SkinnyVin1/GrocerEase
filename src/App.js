import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Home from "./Pages/Home";
// import NavigationbarAdmin from "./Components/NavigationBarAdmin";
import Navigationbar from "./Components/NavigationBar";
import AboutUs from "./Pages/AboutUs";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Shop from "./Pages/Shop";
import LoginPage from "./Pages/LoginPage";
import Body from "./Pages/Body";
import NavforMobile from "./Components/NavbarForMobile";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";



function App() {
  return (
    <Router>
      <div>
        <Navigationbar />
        <NavforMobile></NavforMobile>
        <Routes>
          <Route path="/grocerease" element={<Body />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


