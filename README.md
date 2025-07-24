# OTP Login System

A full-stack OTP-based authentication system using **React** for the frontend and **Node.js (Express)** for the backend. SMS is sent using **Twilio API**.

---

## 📁 Folder Structure

```
OTP-Login-System/
├── backend/     # Express backend for OTP generation and verification
├── frontend/    # React frontend for user login via phone + OTP
└── README.md    # Project documentation
```

---

## 🚀 How to Run the Project Locally

### 🔧 Backend Setup

1. Go to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file using this format:
   ```
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_SERVICE_SID=your_twilio_verify_service_sid
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

### 💻 Frontend Setup

1. Go to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

---

## 📝 Note

> This project uses Twilio's free tier, which may not send OTPs to all numbers. In production, use paid credentials for full delivery.

---

## 👨‍💻 Author

- [Rana Karmakar](https://github.com/Ranakarmakar1)
