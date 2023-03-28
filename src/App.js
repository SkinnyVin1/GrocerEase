import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navigationbar from "./Components/NavigationBar";
import AboutUs from "./Pages/AboutUs";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Shop from "./Pages/Shop";
import LoginPage from "./Pages/LoginPage";
import Body from "./Pages/Body";
import NavforMobile from "./Components/NavbarForMobile";

function App() {
  // function redirectToHomePage() {
  //   window.location.href = "/";
  // }

  // useEffect(() => {
  //   window.addEventListener("load", redirectToHomePage);
  //   return () => {
  //     window.removeEventListener("load", redirectToHomePage);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <div>
        <Navigationbar />
        <NavforMobile></NavforMobile>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
