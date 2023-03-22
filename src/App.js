import Navigationbar from "./Components/NavigationBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import Body from "./Pages/Body";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
