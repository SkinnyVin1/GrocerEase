import Navigationbar from "./Components/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Shop from "./Pages/Shop";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigationbar />
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
