import Navigationbar from "./Components/NavigationBar";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from  "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from './Pages/AboutUs';
import Dashboard from './Pages/Dashboard';
import Orders from './Pages/Orders';
import Shop from './Pages/Shop';

=======
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import Body from "./Pages/Body";
>>>>>>> 08efbc4d8d127dba7d19d6a58711fbf87bc374ab

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
