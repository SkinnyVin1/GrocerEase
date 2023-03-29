import "../Pages/LoginPage.css";
import Bg from "../Images/loginbg.png";
import ShoImg from "../Images/shopping.png";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LOGIN_URL = "/auth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setShowPassword(!showPassword);
  };

  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user, pwd);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div>
          <h1>Successfullt Logged In</h1>
          <br />
        </div>
      ) : (
        <div className="loginBody">
          <img src={Bg} id="bg" />
          <div className="loginContainer">
            <div className="loginForm">
              <div className="imgContent">
                <img src={ShoImg} alt="" />
              </div>
              <div className="lForm">
                <div className="welcome">
                  <span>Welcome to</span>
                  <h1>GrocerEase</h1>
                  <ul>
                    <li>
                      <Link to="/">Go Back to Main Page</Link>
                    </li>
                  </ul>
                </div>
                <img src={ShoImg} id="hideImg" />
                <div className="logform">
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="username">UserName</label> */}
                    <input
                      type="text"
                      placeholder="Username"
                      className="inText"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                    />
                    <div className="passy">
                      {/* <label htmlFor="password">Password:</label> */}
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password "
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />

                      <div className="showForgot">
                        <Link to="/" id="forgot">
                          forgot password
                        </Link>

                        <button
                          onClick={togglePasswordVisibility}
                          id="showHide"
                        >
                          {showPassword ? "Hide" : "Show"} password
                        </button>
                      </div>
                    </div>

                    <button>Log In</button>

                    <Link to="/"> or create an account</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
