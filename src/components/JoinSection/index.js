import { useState } from "react";
import "./index.css";
const JoinSection = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [admissionForm, setAdmissionForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    visitorAddress: "",
    admissionClass: "",
    guardianName: "",
    guardianContact: "",
    consent: false,
  });
  const [visitForm, setVisitForm] = useState({
    visitorName: "",
    visitDate: "",
    visitTime: "",
  }); 
  const [admissionSuccess, setAdmissionSuccess] = useState(false);
  const [visitSuccess, setVisitSuccess] = useState(false);

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  const handleAdmissionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdmissionForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleVisitChange = (e) => {
    const { name, value } = e.target;
    setVisitForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    console.log("Admission Form Data:", admissionForm);
    setAdmissionSuccess(true);
    setTimeout(() => setAdmissionSuccess(false), 3000);
    setAdmissionForm({
      fullName: "",
      dob: "",
      gender: "",
      email: "",
      phone: "",
      visitorAddress: "",
      admissionClass: "",
      guardianName: "",
      guardianContact: "",
      consent: false,
    });
  };

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    console.log("Visit Form Data:", visitForm);
    setVisitSuccess(true);
    setTimeout(() => setVisitSuccess(false), 3000);
    setVisitForm({
      visitorName: "",
      visitDate: "",
      visitTime: "",
    });
  };

  return (
    <section className="join-section">
      <div className="join-container">
        <h1 className="join-heading">Ready to Join Our Family?</h1>
        <p className="join-discussion">
          Take the first step towards your child's bright future. Schedule a visit or apply for admission today.
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

      {activeModal === "admission" && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Admission Form</h2>
            <form onSubmit={handleAdmissionSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" value={admissionForm.fullName} onChange={handleAdmissionChange} required />
              <input type="date" name="dob" value={admissionForm.dob} onChange={handleAdmissionChange} required />
              <select name="gender" value={admissionForm.gender} onChange={handleAdmissionChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="email" name="email" placeholder="Email Address" value={admissionForm.email} onChange={handleAdmissionChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={admissionForm.phone} onChange={handleAdmissionChange} required />
              <textarea name="visitorAddress" placeholder="Your Address" rows="3" value={admissionForm.visitorAddress} onChange={handleAdmissionChange} required></textarea>
              <select name="admissionClass" value={admissionForm.admissionClass} onChange={handleAdmissionChange} required>
                <option value="">Select Class</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1} Grade</option>
                ))}
              </select>
              <input type="text" name="guardianName" placeholder="Parent/Guardian Name" value={admissionForm.guardianName} onChange={handleAdmissionChange} required />
              <input type="tel" name="guardianContact" placeholder="Parent/Guardian Contact" value={admissionForm.guardianContact} onChange={handleAdmissionChange} required />
              <label>
                <input type="checkbox" name="consent" checked={admissionForm.consent} onChange={handleAdmissionChange} required /> I confirm that the information is correct.
              </label>
              <button type="submit">Submit Application</button>
            </form>
            {admissionSuccess && <div className="success-message">Form submitted successfully!</div>}
          </div>
        </div>
      )}

      {activeModal === "visit" && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Schedule a Campus Visit</h2>
            <form onSubmit={handleVisitSubmit}>
              <input type="text" name="visitorName" placeholder="Your Name" value={visitForm.visitorName} onChange={handleVisitChange} required />
              <input type="date" name="visitDate" value={visitForm.visitDate} onChange={handleVisitChange} required />
              <input type="time" name="visitTime" value={visitForm.visitTime} onChange={handleVisitChange} required />
              <button type="submit">Book Visit</button>
            </form>
            {visitSuccess && <div className="success-message">Form submitted successfully!</div>}
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinSection;
