<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- <title>AI Smart Interview Assistant - README</title> -->
</head>
<body>

  <h1 align="center">AI Smart Interview Assistant</h1>

  <p align="center">
    An AI-powered interview practice platform that helps users prepare for interviews,
    analyze performance, and improve with smart feedback.
  </p>

  <p align="center">
    <img alt="React" src="https://img.shields.io/badge/Frontend-React-blue" />
    <img alt="Node.js" src="https://img.shields.io/badge/Backend-Node.js-green" />
    <img alt="MongoDB" src="https://img.shields.io/badge/Database-MongoDB-darkgreen" />
    <img alt="Razorpay" src="https://img.shields.io/badge/Payments-Razorpay-0C8CE9" />
    <img alt="Firebase" src="https://img.shields.io/badge/Auth-Firebase-orange" />
  </p>

  <hr />

  <h2>Overview</h2>
  <p>
    AI Smart Interview Assistant is a full-stack web platform designed to simulate mock interviews,
    provide AI-based feedback, and help users improve their interview performance.
    It supports role-based interviews, performance tracking, pricing plans, and payment integration.
  </p>

  <hr />

  <h2>Features</h2>
  <ul>
    <li>AI-powered mock interview flow</li>
    <li>Role-based interview preparation</li>
    <li>Interview history tracking</li>
    <li>Performance reports and analytics</li>
    <li>User authentication</li>
    <li>Resume-based interview analysis</li>
    <li>Payment integration with Razorpay</li>
    <li>Responsive modern UI</li>
  </ul>

  <hr />

  <h2>Tech Stack</h2>

  <table border="1" cellpadding="10" cellspacing="0">
    <tr>
      <th>Layer</th>
      <th>Technology</th>
    </tr>
    <tr>
      <td>Frontend</td>
      <td>React, Vite, Redux Toolkit, React Router</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Node.js, Express.js</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>MongoDB</td>
    </tr>
    <tr>
      <td>Authentication</td>
      <td>Firebase Auth, Cookies</td>
    </tr>
    <tr>
      <td>Payments</td>
      <td>Razorpay</td>
    </tr>
    <tr>
      <td>Charts / Reports</td>
      <td>Recharts, jsPDF, jspdf-autotable</td>
    </tr>
  </table>

  <hr />

  <h2>Project Structure</h2>

  <pre>
AI-Smart-Interview-Assistant/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── index.js
│   └── package.json
│
└── README.md
  </pre>

  <hr />

  <h2>Installation</h2>

  <h3>1. Clone the repository</h3>
  <pre>
git clone https://github.com/your-username/AI-Smart-Interview-Assistant.git
cd AI-Smart-Interview-Assistant
  </pre>

  <h3>2. Install frontend dependencies</h3>
  <pre>
cd client
npm install
  </pre>

  <h3>3. Install backend dependencies</h3>
  <pre>
cd ../server
npm install
  </pre>

  <hr />

  <h2>Environment Variables</h2>

  <h3>Frontend (.env)</h3>
  <pre>
VITE_SERVER_URL=http://localhost:6000
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
  </pre>

  <h3>Backend (.env)</h3>
  <pre>
PORT=6000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
CLIENT_URL=http://localhost:5173
  </pre>

  <hr />

  <h2>Run Locally</h2>

  <h3>Start backend</h3>
  <pre>
cd server
npm run dev
  </pre>

  <h3>Start frontend</h3>
  <pre>
cd client
npm run dev
  </pre>

  <hr />

  <h2>Deployment Notes</h2>
  <ul>
    <li>Use environment variables instead of hardcoded localhost values in production.</li>
    <li>Update CORS configuration to allow your deployed frontend domain.</li>
    <li>For VPS deployment, Nginx + PM2 or Docker Compose is recommended.</li>
    <li>For payment integration, configure Razorpay webhook and production keys.</li>
  </ul>

  <hr />

  <h2>Known Improvements</h2>
  <ul>
    <li>Add admin dashboard for analytics</li>
    <li>Improve report generation UI</li>
    <li>Add voice-based mock interviews</li>
    <li>Support recruiter / company panel</li>
    <li>Add subscription plans and premium features</li>
  </ul>

  <hr />

  <h2>Contributing</h2>
  <p>
    Contributions, feature suggestions, and improvements are welcome.
    Fork the repository, make your changes, and submit a pull request.
  </p>

  <hr />

  <h2>Author</h2>
  <p>
    <strong>Rishav Patel</strong><br />
    AI Developer | Data Scientist | Builder
  </p>

  <hr />

  <h2>License</h2>
  <p>
    This project is licensed under the MIT License.
  </p>

  <hr />

  <p align="center">
    If you found this project useful, consider giving it a star on GitHub.
  </p>

</body>
</html>
