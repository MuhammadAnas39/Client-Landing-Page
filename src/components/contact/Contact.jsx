import React from "react";
import "./contact.css";
// import { IoMdMail } from "react-icons/io";
// import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="contactBox1">
          <h1>Contact Us</h1>
          <p>
            For inquiries or support related to (web name), please contact us
            using | the form on this page or use the provided email address and
            phone number to contact us directly.
          </p>
          <div className="contactRow">
            <div>
              <div className="contactIconDiv">
                <IoMailOutline size={20} color="#00ac45" />
              </div>
              <div>
                <h5>Email</h5>
                <p className="contactLightText">name@example.com</p>
              </div>
            </div>
            <div>
              <div className="contactIconDiv">
                <FiPhone size={20} color="#00ac45" />
              </div>
              <div>
                <h5>Email</h5>
                <p className="contactLightText">name@example.com</p>
              </div>
            </div>
            <div>
              <div className="contactIconDiv">
                <IoLocationOutline size={20} color="#00ac45" />
              </div>
              <div>
                <h5>Email</h5>
                <p className="contactLightText">name@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactBox2">
          <form className="contactFormContainer">
            <div className="contactFormField">
              <label htmlFor="">Name</label>
              <div className="contactFormInputField">
                <FaRegUser />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="contactFormField">
              <label htmlFor="">Phone No</label>
              <div className="contactFormInputField">
                <FiPhone />
                <input type="text" name="" id="" placeholder="password" />
              </div>
            </div>
            <div className="contactFormField">
              <label htmlFor="">Email Address</label>
              <div className="contactFormInputField">
                <IoMailOutline />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="contactFormField">
              <label htmlFor="">Message</label>
              <div className="contactFormInputField">
                <textarea name="" id="">
                  enter your message...
                </textarea>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="contactLastBox">
        <img src={contact} alt="" />
        <div className="lastBoxDetail">
          <h3>Get started now!</h3>

          <p>
            Sign up now to improve your customer support with our tools and
            solutions.
          </p>
          <div className="contactLastBtnBox">
            <button className="contactGetStartedBtn">Get Started</button>
            <button className="contactPricesBtn">View Prices</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
