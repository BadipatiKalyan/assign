// Otp.js
import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';


const Otp = () => {
  const navigate = useNavigate(); // Initialize useHistory hook

  // Function to handle navigation to CreateAccount component
  const handleCreateAccountClick = () => {
    navigate('/created');
  };
  return (
    <div className="heading"> <i class="fa fa-th" aria-hidden="true"></i> Anonymous
    <div className="card">
    <h2>Create Your Account</h2>
    <p>Please Verify Your Email Id to continue. We have sent an OTP to this email</p>
    <form>
      <div class="form-group">
        <input type="email" id="email" className="email" placeholder="OTP" />
      </div>
      <button type="submit" className="continue-btn" onClick={ handleCreateAccountClick}>Continue <span>&rarr;</span></button>
    </form>
  </div>
  </div>
  );
}

export default Otp;
