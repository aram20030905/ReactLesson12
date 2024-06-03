import React, { useState } from "react";
import "./logInPage.css";
import fbLogo from "../../images/Fb.png";
import { useNavigate } from "react-router-dom";

const LogInPage = ({ usersData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const createButton = () => {
    navigate("/sign-up");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlerLogin = (e) => {
    e.preventDefault();
    const { login, password } = e.target;
    const loginUser = usersData.find((el) => el.password === password.value && (el.email === login.value || el.phone === login.value));
    if (loginUser) {
      navigate("/profil", { state: loginUser });
    }
  };

  return (
    <div className="logInPage">
      <div className="pageLeftHolder">
        <img src={fbLogo} alt="fb logo" />
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <form className="pageRightHolder" onSubmit={handlerLogin}>
        <input placeholder="Email or phone number" name="login" />
        <div className="passwordInputContainer">
          <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" />
          <span className="togglePassword" onClick={togglePasswordVisibility}>
            {showPassword ? "🙉" : "🙈"}
          </span>
        </div>
        <button className="logInButton">Log In</button>
        <span>
          <a href="#">Forgot password?</a>
        </span>
        <span className="dividingLine"></span>
        <span onClick={createButton} className="createButton">
          Create new account
        </span>
      </form>
    </div>
  );
};

export default LogInPage;
