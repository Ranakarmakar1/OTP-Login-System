const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendOTP = async (req, res) => {

  //We extract the user's phone number from the request body.
  const { phone } = req.body;

  //We call Twilio’s Verify API to send an OTP to the number using SMS channel.
  try {
    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({
        to: `+91${phone}`,
        channel: 'sms'
      });

//If sending OTP is successful, we return a success message along with the verification SID.
//If there’s an error (likely because of free plan), we return a proper error message.

    res.status(200).json({
      success: true,
      message: `OTP sent to +91${phone}`,
      sid: verification.sid
    });
  } catch (error) {
    console.error("OTP Send Error:", error.message);
    res.status(500).json({
      success: false,
      message: "❌ Failed to send OTP. It may be because you're using a free Twilio account."
    });
  }
};


// ✅ verifyOTP Function:

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;

  //We call Twilio to check if the OTP is valid for that number.
  try {
    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: `+91${phone}`,
        code: otp
      });

    //If the OTP is valid, we return a success message along with the verification SID.If OTP is invalid, we return a failure message.
    
    if (verificationCheck.status === "approved") {
      res.status(200).json({
        success: true,
        message: "✅ OTP Verified Successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "❌ Invalid OTP or number not verified.",
      });
    }
  } catch (error) {
    console.error("OTP Verify Error:", error.message);
    res.status(500).json({
      success: false,
      message: "❌ OTP verification failed.",
    });
  }
};
