import React, { useState } from "react";
import Header from "../Header";
import Slider from "../Slider";
import Footer from "../Footer";

import awardIcon from "../AllImage/3.jpg";
import "./index.css";

const Home = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [admissionSuccess, setAdmissionSuccess] = useState(false);
  const [visitSuccess, setVisitSuccess] = useState(false);

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    setAdmissionSuccess(true);
    setTimeout(() => setAdmissionSuccess(false), 3000);
  };

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    setVisitSuccess(true);
    setTimeout(() => setVisitSuccess(false), 3000);
  };

  return (
    <div className="home-container">
      <Header />
      <Slider />

      {/* Stats Section */}
      <section>
      <div className="bgg-container">
        <div className="stats-grid">
          <div className="stat-block">
            <div className="stat-number">1500+</div>
            <div className="stat-name">Students</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">95%</div>
            <div className="stat-name">Success Rate</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">15+</div>
            <div className="stat-name">Expert Teachers</div>
          </div>
          <div className="stat-block">
            <div className="stat-number">15</div>
            <div className="stat-name">Years of Excellence</div>
          </div>
        </div>
      </div>
      </section>

      {/* Committed Section */}
      <section className="committed-section">
        <div className="committed-section-top">
          <div className="committed-left">
            <h1 className="committed-heading">Committed to Excellence in Education</h1>
            <p className="committed-discussion">
              Lal Bihari Mahto Divine Public School, Naitand, has been a beacon of quality
              education for nearly three decades. We believe in nurturing not just academic
              excellence but also character, creativity, and critical thinking.
            </p>

            <div className="space-y-4 m-8">
              {[
                'CBSE Affiliated with Modern Curriculum',
                'Experienced and Dedicated Faculty',
                'State-of-the-Art Infrastructure',
                'Holistic Development Programs',
              ].map((text, index) => (
                <div className="committed-icon-name" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-check2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 
                    .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 
                    0 5.5 5.5 0 1 1-11 0" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 
                    9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 
                    3a.5.5 0 0 0 .708 0z" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <button className="committed-button">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                  0 0 1 .708-.708l4 4a.5.5 0 0 1 0 
                  .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
                  8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>

          <div className="committed-outter-image">
            <img className="committed-image" src={awardIcon} alt="School Campus" />
          </div>
        </div>
      </section>

      {/* Academic Section */}
      <section className="academic-section">
        <div className="container">
          <div className="text-center">
            <h1 className="academic-heading">Academic Excellence at Every Level</h1>
            <p className="academic-description">
              From foundational learning to advanced academics, we offer
              comprehensive programs designed to unlock every student's potential.
            </p>
          </div>

          <div className="card-grid">
            {/* Primary Education */}
            <div className="academic-card">
              <div className="card-header">
                <div className="icon-badge-fis">
                  <div className="award-icon-fis">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                  </div>
                </div>
                <h3 className="academic-card-header-name">Primary Education</h3>
                <p className="academic-card-header-class">Classes Pre-Nursery – V</p>
              </div>
              <div className="card-body">
                <p>
                  Building strong foundations with play-based learning, creativity,
                  and basic academic skills.
                </p>
                <ul>
                  <li>Interactive Learning Methods</li>
                  <li>Creative Arts & Crafts</li>
                  <li>Physical Development</li>
                </ul>
              </div>
            </div>

            {/* Middle School */}
            <div className="academic-card">
              <div className="card-header">
                <div className="icon-badge-sec">
                  <div className="award-icon-sec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13h3c0-1.1.436-2.207 1.09-3.083a6.977 6.977 0 0 0-.17-.042 7.72 7.72 0 0 0-2-.875Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="academic-card-header-name">Middle School</h3>
                <p className="academic-card-header-class">Classes VI – VIII</p>
              </div>
              <div className="card-body">
                <p>
                  Encouraging analytical thinking and practical knowledge to prepare
                  for higher education.
                </p>
                <ul>
                  <li>Science Experiments & Labs</li>
                  <li>Computer Education</li>
                  <li>Team Projects & Activities</li>
                </ul>
              </div>
            </div>

            {/* Senior School */}
            <div className="academic-card">
              <div className="card-header">
                <div className="icon-badge-sec">
                  <div className="award-icon-sec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
                      <path d="M8.211.86a.5.5 0 0 0-.422 0L1 3.204 8 6.042l7-2.838-6.789-2.344zM8 7.5L1 4.5v3l7 2.5 7-2.5v-3l-7 3zm0 1.5l-8-3v3c0 .667.334 1.5 1 2l7 3 7-3c.667-.5 1-1.333 1-2v-3l-8 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="academic-card-header-name">Senior School</h3>
                <p className="academic-card-header-class">Classes IX – XII</p>
              </div>
              <div className="card-body">
                <p>
                  Preparing students for board exams, higher education, and career readiness
                  through rigorous academics.
                </p>
                <ul>
                  <li>Advanced Curriculum & Electives</li>
                  <li>Competitive Exam Preparation</li>
                  <li>Leadership & Community Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stand Section */}
      <section className="stand-section">
        <div className="container">
          <h1 className="stand-heading">Why Choose Us?</h1>
          <p className="stand-description">
            We stand for holistic development, academic excellence, and a nurturing
            environment for every child.
          </p>
          <div className="stand-cards">
            {[
              "Innovative Learning Methods",
              "Highly Qualified Faculty",
              "Safe & Secure Campus",
              "Strong Community Values"
            ].map((text, index) => (
              <div className="stand-card" key={index}>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <h1 className="awards-heading">Our Achievements</h1>
          <div className="awards-grid">
            {["Best School Award 2022", "Excellence in Teaching 2021", "Innovation in Education 2023"].map(
              (award, index) => (
                <div className="award-card" key={index}>
                  <p>{award}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-section">
      <div className="join-container">
        <h1 className="join-heading">Ready to Join Our Family?</h1>
        <p className="join-discussion">
          Take the first step towards your child's bright future. Schedule a visit
          or apply for admission today.
        </p>

        <div className="join-button">
          <button className="apply-btn" onClick={() => openModal("admission")}>
            Apply for Admission
          </button>
          <button className="visit-btn" onClick={() => openModal("visit")}>
            Schedule Campus Visit
          </button>
        </div>
      </div>

      {/* Admission Form Modal */}
      {activeModal === "admission" && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Admission Form</h2>
            <form onSubmit={handleAdmissionSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" required />
              <input type="date" name="dob" required />
              <select name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
              <textarea
                name="visitorAddress"
                placeholder="Your Address"
                rows="3"
                required
              ></textarea>
              <select name="admissionClass" required>
                <option value="">Select Class</option>
                {[
                  "Nursery",
                  "KG",
                  "1st",
                  "2nd",
                  "3rd",
                  "4th",
                  "5th",
                  "6th",
                  "7th",
                  "8th",
                  "9th",
                  "10th",
                  "11th",
                  "12th",
                ].map((cls, i) => (
                  <option key={i} value={cls.toLowerCase()}>
                    {cls} Grade
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="guardianName"
                placeholder="Parent/Guardian Name"
                required
              />
              <input
                type="tel"
                name="guardianContact"
                placeholder="Parent/Guardian Contact"
                required
              />
              <label>
                <input type="checkbox" name="consent" required /> I confirm that the
                information is correct.
              </label>
              <button type="submit">Submit Application</button>
            </form>
            {admissionSuccess && (
              <div className="success-message">Form submitted successfully!</div>
            )}
          </div>
        </div>
      )}

      {/* Visit Form Modal */}
      {activeModal === "visit" && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Schedule a Campus Visit</h2>
            <form onSubmit={handleVisitSubmit}>
              <input type="text" name="visitorName" placeholder="Your Name" required />
              <input type="date" name="visitDate" required />
              <input type="time" name="visitTime" required />
              <button type="submit">Book Visit</button>
            </form>
            {visitSuccess && (
              <div className="success-message">Form submitted successfully!</div>
            )}
          </div>
        </div>
      )}
    </section>
      <Footer />
    </div>
  );
};

export default Home;
