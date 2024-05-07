import React from "react";
import "./signup.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signupContainer">
      <h3>Create Account</h3>
      <p>Sign in to your account to continue.</p>

      <form className="signUpFormContainer">
        <div className="signUpFormField">
          <label htmlFor="">Name</label>
          <div className="signUpFormInputField">
            <FaRegUser />
            <input type="text" name="" id="" placeholder="name@example.com" />
          </div>
        </div>
        <div className="signUpFormField">
          <label htmlFor="">Email Address</label>
          <div className="signUpFormInputField">
            <IoMailOutline />
            <input type="text" name="" id="" placeholder="name@example.com" />
          </div>
        </div>
        <div className="signUpFormField">
          <label htmlFor="">Password</label>
          <div className="signUpFormInputField">
            <AiOutlineLock />
            <input type="text" name="" id="" placeholder="Password" />
          </div>
        </div>

        <button className="signUpSubmitBtn">Sign up</button>

        <div class="continueGoogle">
          <div class="line left-line"></div>
          <p>or continue with</p>
          <div class="line right-line"></div>
        </div>
        <button className="googleSignIn">
          <FcGoogle size={25} />
          Sign in with google
        </button>

        <div className="alreadyHaveAccountDiv">
          <p>Already have an account? </p>
          <span onClick={() => navigate("/signin")}>Sign in</span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
