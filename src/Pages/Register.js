import '../Pages/LoginPage.css'
import Bg from "../Images/loginbg.png";
import ShoImg from "../Images/register.png";
import { Link } from 'react-router-dom';

const Register = () => {
    function GoRegister(){
        alert('Registration Submitted');
    }
    return ( 
        <div className="loginBody">
      <img src={Bg} id="bg"  />
      <div className="loginContainer">
        <div className="loginForm">
          <div className="lForm">
            <div className="welcome">
              {/* <span>Welcome to</span> */}
              <h1 className='fadeRegi'>Sign Up</h1>
              <ul>
            </ul>
            </div>
            <img src={ShoImg} id="hideImg" />
            <div className="logform">
            {/* {warningText && <p className="warningText">{warningText}</p>} */}
            <form>
                  
                <div className="regi-name">
                <input
                  type="text"
                  placeholder="First Name"
                  className="inText"
                  id="fName"
                  // autoComplete="off"
                  required
                />
                  <input
                    id="lName"
                    placeholder="Last Name"
                    autoComplete="off"
                    required
                  />
                  </div>
                  <input
                  type="text"
                  placeholder="Email"
                  className="inText"
                  id="email"
                  // autoComplete="off"
                  required
                />
                <div className="passy">
                  {/* <label htmlFor="password">Password:</label> */}
                  <input
                    type="password"
                    id="passi"
                    placeholder="Password"
                    autoComplete="off"
                    required
                  />
                  </div>
                  <div className="passy">
                  {/* <label htmlFor="password">Password:</label> */}
                  <input
                    type="password"
                    id="confirmpass"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    required
                  />
                  </div>
                
                <button onClick={GoRegister} id='submitId'>Sign Up</button>
                <Link to="/Login" className='fadeRegi'>Go back to Login Page</Link>
                
              </form>
            </div>
          </div>
          <div className="imgContent">
            <img src={ShoImg} className='regiBg'/>
          </div>
        </div>
      </div>
    </div>

     );
}
 
export default Register;