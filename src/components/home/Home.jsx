import React, { useState } from "react";
import "./home.css";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import {
  MdArrowRightAlt,
  MdOutlineAnalytics,
  MdRocketLaunch,
} from "react-icons/md";
import { FaPlay, FaFire, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiSendPlaneLine } from "react-icons/ri";
import { PiShootingStar } from "react-icons/pi";

const Home = () => {
  const imgLink =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";
  const greenColor = "#04c953";

  const secTwoFeatures = [
    {
      id: 1,
      icon: <MdOutlineAnalytics size={40} color={greenColor} />,
      title: "Advanced Analytics",
      desc: "Lorem ipsum  is a placeholder commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful contentorem isum may be used as a placeholder before tnal copy is availablet is also used.",
    },
    {
      id: 2,
      icon: <IoShieldCheckmark size={40} color="white" />,
      title: "Secured Platform",
      desc: "Lorem ipsum  is a placeholder commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful contentorem isum may be used as a placeholder before tnal copy is availablet is also used.",
    },
    {
      id: 3,
      icon: <MdRocketLaunch size={40} color={greenColor} />,
      title: "Launch New Products",
      desc: "Lorem ipsum  is a placeholder commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful contentorem isum may be used as a placeholder before tnal copy is availablet is also used.",
    },
  ];

  const secThreeCardDetails = [
    {
      title: "100% Success",
      desc: "Lorem ipsum  is a placeholder text commonly used to.",
    },
    {
      title: "20+ Awards",
      desc: "Lorem ipsum  is a placeholder text commonly used to.",
    },
  ];

  const secFourPlanDetails = [
    {
      icon: <RiSendPlaneLine size={20} color={greenColor} />,
      title: "Basic Plan",
      price: "$29",
    },
    {
      icon: <MdRocketLaunch size={20} color={greenColor} />,
      title: "Premium Plan",
      price: "$49",
      fire: <FaFire color="red" />,
      fireText: "Most Popular",
    },
    {
      icon: <PiShootingStar size={20} color={greenColor} />,
      title: "Custom Plan",
      price: "$99",
    },
  ];

  const planDesc = [
    {
      icon: <FaCheckCircle size={15} color="white" />,
      title: "Lorem ipsum dolor sit amet, .ipsum",
    },
  ];
  const repeatedPlanDesc = Array(8).fill(planDesc[0]);

  const secFiveTestimonial = [
    {
      icon: <FaQuoteLeft size={25} color={greenColor} />,
      text: "Lorem ipsum dolor sit amet consect etuac enim est faucibus at risus varius.ugiat ttis lectus integer fermentum ut quis. orem m dolor sit amet consectetur.",
      profile:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "abc",
    },
    {
      icon: <FaQuoteLeft size={25} color={greenColor} />,
      text: "Lorem ipsum dolor sit amet consect etuac enim est faucibus at risus varius.",
      profile:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg",
      name: "xyz",
    },
  ];
  const repeatedTestimonial = Array(15)
    .fill()
    .map((_, index) => secFiveTestimonial[index % secFiveTestimonial.length]);

  const [currentPage, setCurrentPage] = useState(0); // State to track current page

  const testimonialsPerPage = 3; // Number of testimonials to display per page
  const totalPages = Math.ceil(
    repeatedTestimonial.length / testimonialsPerPage
  );

  const handleClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="homeContainer">
      <div className="secOne">
        <div className="SatisfiedUsers">
          <div className="satisfiedUserSecOne">
            <div className="imgContainer">
              <img src={imgLink} alt="" />
              <img src={imgLink} alt="" />
              <img src={imgLink} alt="" />
            </div>
            <div className="reviewContainer">
              <span className="star fa fa-star checked"></span>
              <p>4.9</p>
            </div>
          </div>
          <p>12.5k+ Satisfied Users</p>
        </div>

        <div className="secOneContent">
          <div className="secOnePartOne">
            <h2 className="secOnePartOneHeading">
              Manage & Enhance Your{" "}
              <span style={{ color: greenColor }}>Crop Production</span> With
              Our Advanced Al Management Tool!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nullam elementum et
              telluhabi ant ltrices sodales vestibulum pentesque tellus quis sed
              lectus.
            </p>
            <div className="secOnePartOneButtonContainer">
              <button className="getStatedBtn">
                {" "}
                Get Started
                <MdArrowRightAlt size={20} />
              </button>
              <button className="watchDemoBtn">
                <div>
                  <FaPlay size={12} color="black" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="secOnePartTwo">
            <img className="image1" src={image1} alt="img" />
          </div>
        </div>
      </div>

      <div className="secTwo">
        <p
          style={{
            width: "fit-content",
            padding: "3px 10px",
            borderRadius: "5px",
            backgroundColor: "black",
          }}
        >
          Features
        </p>
        <h2>
          What is the{" "}
          <span style={{ color: greenColor }}>SaaS Application</span> for ?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nullam elementum et telluhabi
          ant ltrices sodales vestibulum pentesque tellus quis sed lectus.
          Porttitor vtae aenean sieque et lacus.
        </p>
        <div className="featuresContainer">
          {secTwoFeatures?.map((item, index) => (
            <div
              className={`featureCard ${index === 1 ? "secondCardStyle" : ""}`}
              key={item.id}
            >
              <div
                className={`featureIconContainer ${
                  index === 1 ? "secondIcon" : ""
                }`}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="secThree" id="about">
        <div className="secThreeBoxOne">
          <h2>About Us</h2>
          <p>
            Lorem ipsum  is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful ntent. Lorem ipsum may be used as a placeholder before
            the final copy is available. It is lso used to temporarily replace
            text in a process called greeking.
          </p>

          <div className="secThreeRow">
            {secThreeCardDetails?.map((item) => (
              <div>
                <h3>{item?.title}</h3>
                <p>{item?.desc}</p>
              </div>
            ))}
          </div>
          <button className="getStatedBtn">
            {" "}
            Get Started
            <MdArrowRightAlt size={20} />
          </button>
        </div>
        <div className="secondImgContainer">
          <img src={image2} alt="img2" />
        </div>
      </div>

      <div className="secFour" id="pricing">
        <h2>
          Choose the perfect 
          <span style={{ color: greenColor }}>pricing plan</span> to
          suit your needs
        </h2>
        {/* <div className="billingBox">
          <p className="paraOne">Monthly Billing</p>
          <p className="paraTwo">Annual Billing</p>
          <p className="paraThree">Save 20%</p>
        </div> */}

        <div className="planBox">
          {secFourPlanDetails.map((item, index) => (
            <div
              className={`planCard ${index === 1 ? "secondPlanCardStyle" : ""}`}
              key={index}
            >
              <div className="planIconContainer">{item.icon}</div>
              <h5>{item.title}</h5>
              {index === 1 && item.fireText && (
                <div className="additionalIconContainer">
                  {item.fire}
                  <span className="additionalIcon">{item.fireText}</span>
                </div>
              )}
              <h2 style={{ display: "flex", gap: "4px" }}>
                {item.price}
                <span style={{ fontSize: "11px", marginTop: "auto" }}>
                  Per Month
                </span>
              </h2>
              <button
                className={`planGetStatedBtn ${
                  index === 1 ? "secondPlanButtonStyle" : ""
                }`}
              >
                {" "}
                {index === 2 ? "Contact Us" : "Get Started"}
                <MdArrowRightAlt size={20} />
              </button>
              <div className="dottedLine"></div>
              <div>
                {repeatedPlanDesc.map((item) => (
                  <div className="planDetailBox">
                    {item.icon}
                    <p style={{ fontSize: "12px" }}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="secFive">
        <div className="secFiveSatisfiedUsers">
          <div className="satisfiedUserSecOne">
            <div className="imgContainer">
              <img src={imgLink} alt="" />
              <img src={imgLink} alt="" />
              <img src={imgLink} alt="" />
            </div>
            <div className="reviewContainer">
              <span className="star fa fa-star checked"></span>
              <p>4.9</p>
            </div>
          </div>
          <p>12.5k+ Satisfied Users</p>
        </div>
        <h2 className="secFiveHeading">
          <span style={{ color: greenColor }}> Thousands of users </span>
          have already  tried our application 
        </h2>

        <div className="testimonialRow">
          {repeatedTestimonial
            .slice(
              currentPage * testimonialsPerPage,
              (currentPage + 1) * testimonialsPerPage
            )
            .map((testimonial, index) => (
              <div className="testimonialCard" key={index}>
                {testimonial.icon}
                <p>{testimonial.text}</p>
                <div className="profileBox">
                  <img src={testimonial.profile} alt="" />
                  <p>{testimonial.name}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i}
              className={`paginationDot ${i === currentPage ? "active" : ""}`}
              onClick={() => handleClick(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
