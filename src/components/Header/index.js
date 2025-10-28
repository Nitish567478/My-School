import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../AllImage/school-logo.jpg";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    class: "",
    parentsName: "",
    dob: "",
    aadhaar: "",
    photo: "",
    city: "",
    district: "",
    pin: "",
    caste: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0].name : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("admissionData", JSON.stringify(formData));
    alert("Form submitted successfully!");
    closeForm();
  };

  return (
    <>
      <nav className={`main-nav ${scrolled ? "fixed" : ""}`}>
        <div className="nav-container">
          <div className={`nav-logo ${scrolled ? "hide" : ""}`}>
            <Link to="/">
              <img className="school-logo" src={logo} alt="school logo" />
            </Link>
            <div>
              <h1 className="school-name">LBM Divine Public School</h1>
              <p className="nav-location">Naitand</p>
            </div>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "✖" : "☰"}
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notices">Notice</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/academic">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/facility">Facility</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button className="apply-now" onClick={openForm}>Apply Now</button>
            </li>
          </ul>
        </div>
      </nav>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Admission Form</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Student Name" required onChange={handleChange} />
              <input type="tel" name="tel" placeholder="Mobile Number" required onChange={handleChange} />
              <input type="text" name="class" placeholder="Class" required onChange={handleChange} />
              <input type="text" name="parentsName" placeholder="Parent’s Name" required onChange={handleChange} />
              <input type="date" name="dob" placeholder="Date of Birth" required onChange={handleChange} />
              <input type="text" name="aadhaar" placeholder="Aadhaar Number" required onChange={handleChange} />
              <input type="file" name="photo" accept="image/*" onChange={handleChange} />
              <input type="text" name="city" placeholder="City" required onChange={handleChange} />
              <input type="text" name="district" placeholder="District" required onChange={handleChange} />
              <input type="text" name="pin" placeholder="PIN Code" required onChange={handleChange} />
              <input type="text" name="caste" placeholder="Caste" required onChange={handleChange} />
              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={closeForm}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
