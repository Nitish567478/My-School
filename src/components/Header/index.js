import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../AllImage/school-logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <>
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-logo-top">
            <div className="nav-logo">
              <Link to="/">
                <img className="school-logo" src={logo} alt="school logo" />
              </Link>
                <div>
                  <h1 className='school-name'>Lal Bihari Mahto Divine Public School</h1>
                  <p className="nav-location">Naitand</p>
                </div>
            </div>
          </div>

          <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notice">Notice</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button className="apply-now" onClick={openForm}>
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Admission Form</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
              <button type="button" onClick={closeForm}>Close</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
