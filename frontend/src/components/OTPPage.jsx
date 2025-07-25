import React, { useState } from "react";
import '../styles/OTPPage.css';




const OTPPage = () => {
  const [phone, setPhone] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSendOtp = () => {
    if (!phone || phone.length !== 10) {
      alert("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    // Show message instead of calling backend
    setShowMessage(true);
  };

  return (
    <div className="otp-container">
      <h2>📱 Phone Verification</h2>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>

      {showMessage && (
        <div className="info-message">
          ❌ OTP won’t be delivered because this project uses a free Twilio account.
          <br />
          ✅ In my internship, I used a paid version and it worked perfectly.
          <br />
          🔗{" "}
          <a
            href="https://github.com/Ranakarmakar1/OTP-Login-System"
            target="_blank"
            rel="noreferrer"
          >
            View Full Code on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default OTPPage;
