import React from "react";
import "./login.css";
import { AiOutlineLock } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="signInContainer">
      <h3>Sign in</h3>
      <p>Sign in to your account to continue.</p>

      <form className="signInFormContainer">
        <div className="signInFormField">
          <label htmlFor="">Email Address</label>
          <div className="signInFormInputField">
            <IoMailOutline />
            <input type="text" name="" id="" placeholder="name@example.com" />
          </div>
        </div>
        <div className="signInFormField">
          <label htmlFor="">Password</label>
          <div className="signInFormInputField">
            <AiOutlineLock />
            <input type="text" name="" id="" placeholder="Password" />
          </div>
        </div>

        <button className="signInSubmitBtn">Sign in</button>

        <div class="continueGoogle">
          <div class="line left-line"></div>
          <p>or continue with</p>
          <div class="line right-line"></div>
        </div>
        <button className="googleSignIn">
          <FcGoogle size={25} />
          Sign in with google
        </button>

        <div className="dontHaveAccountDiv">
          <p>Don't have an account? </p>
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
