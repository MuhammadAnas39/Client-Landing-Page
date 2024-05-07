import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Circle from "./components/utils/Circle";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/utils/Footer";
import Nav from "./components/home/Nav";
import Contact from "./components/contact/Contact";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className="App">
      <Circle position="right" />
      <Circle position="left" />
      {/* <Circle position="midCenter" /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
