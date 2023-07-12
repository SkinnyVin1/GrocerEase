import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navigationbar from "./Components/NavigationBar";
import NavigationbarAdmin from "./Components/NavigationBarAdmin";
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
          <Route path="/grocerease" element={<Body />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



// import { useState, useEffect } from "react";
// import axios from "axios";

// const Student = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [batchNumber, setBatchNumber] = useState("");
//   const [students, setStudents] = useState([]);


//   const addStudent = (e) => {
//     e.preventDefault();
//     let getData = new FormData();
//     getData.append("firstName", firstName);
//     getData.append("lastName", lastName);
//     getData.append("batchNumber", batchNumber);
//     getData.append("function", 1);

//     axios({
//       method: "POST",
//       url: "http://localhost/WD34P_PHP/wd34p_exercise36_serrano_db.php",
//       data: getData,
//     }).then(function (response) {
//       alert("Record Successfully Added");
//     });
//   };

//   const deleteStudent = (e) => {
//     let getData = new FormData();
//     getData.append("id", e.currentTarget.title);
//     getData.append("function", 2);
//     alert(e.currentTarget.title);
//     axios({
//       method: "POST",
//       url: "http://localhost/WD34P_PHP/wd34p_exercise36_serrano_db.php",
//       data: getData,
//     }).then(function (response) {});
//   };

//   const updateStudent = (e) => {
//     let getData = new FormData();
//     getData.append("id", e.currentTarget.title);
//     getData.append(
//       "firstName",
//       document.getElementById("student_fname_" + e.currentTarget.title).value
//     );
//     getData.append(
//       "lastName",
//       document.getElementById("student_lname_" + e.currentTarget.title).value
//     );
//     getData.append("function", 3);
//     alert(
//       document.getElementById("student_lname_" + e.currentTarget.title).value
//     );
//     axios({
//       method: "POST",
//       url: "http://localhost/WD34P_PHP/wd34p_exercise36_serrano_db.php",
//       data: getData,
//     }).then(function (response) {});
//   };

//   useEffect(() => {
//     const url = "http://localhost/WD34P_PHP/wd34p_exercise36_serrano_db.php";
//     axios.get(url).then((response) => {
//       setStudents(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Student List</h2>
//       <form>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <br></br>
//         <br></br>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <br></br>
//         <br></br>
//         Batch Number:
//         <input
//           type="text"
//           name="batchNumber"
//           value={batchNumber}
//           onChange={(e) => setBatchNumber(e.target.value)}
//         />
//         <br></br>
//         <br></br>
//         <input type="submit" onClick={addStudent} />
//       </form>
//       <ul>
//         {students.map((val) => {
//           return (
//             <li key={val.student_id}>
//               <input
//                 type="text"
//                 defaultValue={val.student_fname}
//                 id={"student_fname_" + val.student_id}
//               />
//               <input
//                 type="text"
//                 defaultValue={val.student_lname}
//                 id={"student_lname_" + val.student_id}
//               />
//               <button title={val.student_id} onClick={deleteStudent}>
//                 DELETE
//               </button>
//               <button title={val.student_id} onClick={updateStudent}>
//                 UPDATE
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Student;