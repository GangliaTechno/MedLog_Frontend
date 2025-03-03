import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../reducers/authReducer";
import Notification from "../Components/Notification";
import "../styles.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [notification, setNotification] = useState({ isOpen: false, message: "", type: "info" });
  
  const countries = ["India", "United States", "United Kingdom", "Australia", "Canada", "Germany"];
  const trainingYearsIndia = ["Residency", "Postgraduate year 1", "Internship", "Resident medical officer", "Postgraduate year 2", "Postgraduate year 3", "Postgraduate year 4", "Postgraduate year 5", "Consultant"];
  const trainingYearsOther = ["Medical Year 1", "Medical Year 2", "Medical Year 3"];
  const hospitalsIndia = ["KMC Manipal", "AIIMS Delhi", "Fortis Hospital"];
  const hospitalsOther = ["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins Hospital"];
  const specialtiesIndia = ["Allergy", "Cardiology", "Dermatology", "Emergency medicine"];
  const specialtiesOther = ["Oncology", "Pediatrics", "Neurology"];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [trainingYears, setTrainingYears] = useState([]);
  const [selectedTrainingYear, setSelectedTrainingYear] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    if (country === "India") {
      setTrainingYears(trainingYearsIndia);
      setHospitals(hospitalsIndia);
      setSpecialties(specialtiesIndia);
    } else {
      setTrainingYears(trainingYearsOther);
      setHospitals(hospitalsOther);
      setSpecialties(specialtiesOther);
    }
    setSelectedTrainingYear("");
    setSelectedHospital("");
    setSelectedSpecialty("");
  };

  const handleSubmit = async () => {
    if (!fullName || !email || !password || !confirmPassword || !selectedCountry || !selectedTrainingYear || !selectedHospital || !selectedSpecialty) {
      setNotification({ isOpen: true, message: "Please fill in all required fields.", type: "error" });
      return;
    }
    if (password !== confirmPassword) {
      setNotification({ isOpen: true, message: "Passwords do not match.", type: "error" });
      return;
    }

    const userData = { fullName, email, password, country: selectedCountry, trainingYear: selectedTrainingYear, hospital: selectedHospital, specialty: selectedSpecialty };
    
    try {
      console.log("Sending Registration Data:", userData);
      await dispatch(signupUser(userData)).unwrap();
      setNotification({ isOpen: true, message: "Registration successful!", type: "success" });
      setTimeout(() => navigate("/logbookpage"), 2000);
    } catch (err) {
      console.error("Registration error:", err); //Debug
      setNotification({ isOpen: true, message: err.error || "Registration failed", type: "error" });
    }
  };

  return (
    <div className="registration-container">
      <h1 className="title">Welcome to MedicalLogBook!</h1>
      <p className="subtitle">To configure your account, please provide details about your current medical training.</p>
      
      <Notification isOpen={notification.isOpen} onRequestClose={() => setNotification({ isOpen: false, message: "", type: "info"})} message={notification.message || ""} type={notification.type} />
      
      <div className="form-group">
        <label>Full Name <span className="required">*</span></label>
        <input type="text" className="form-control" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Email <span className="required">*</span></label>
        <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      <div className="form-group">
        <label>Password <span className="required">*</span></label>
        <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      <div className="form-group">
        <label>Confirm Password <span className="required">*</span></label>
        <input type="password" className="form-control" placeholder="Re-enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      

      <div className="form-group">
        <label>Country <span className="required">*</span></label>
        <select className="form-control" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <>
          <div className="form-group">
            <label>Training Year <span className="required">*</span></label>
            <select className="form-control" value={selectedTrainingYear} onChange={(e) => setSelectedTrainingYear(e.target.value)}>
              <option value="">Select your training year</option>
              {trainingYears.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Hospital <span className="required">*</span></label>
            <select className="form-control" value={selectedHospital} onChange={(e) => setSelectedHospital(e.target.value)}>
              <option value="">Select a hospital</option>
              {hospitals.map((hospital, index) => (
                <option key={index} value={hospital}>{hospital}</option>
              ))}
            </select>
          </div>
        </>
      )}
      <button className="btn-submit" onClick={handleSubmit} disabled={isLoading || !selectedCountry}>{isLoading ? "Registering..." : "Set up Logbook!"}</button>
    </div>
  );
};

export default RegistrationPage;
