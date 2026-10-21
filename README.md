Employee Attendance API

A RESTful API built using Node.js, Express.js, and MongoDB for employee attendance management and user authentication.

Features
REST API built with Express.js
MongoDB database integration using Mongoose
User authentication using JSON Web Tokens (JWT)
Password hashing using bcrypt
Authentication and attendance routes
Environment variable support using dotenv
Development server using Nodemon
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JSON Web Token (JWT)
bcrypt
dotenv
Nodemon
Project Structure
finalexamnode/
├── config/
│   └── db.js
├── middleware/
├── models/
├── routes/
│   ├── index.js
│   ├── authRoutes.js
│   └── attendenceRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md

Prerequisites

Make sure you have installed:

Node.js
npm
MongoDB
Installation
1. Clone the repository
git clone https://github.com/vaishnavi-210407/finalexamnode.git

2. Navigate to the project directory
cd finalexamnode

3. Install dependencies
npm install

4. Configure environment variables

Create a .env file in the root directory and configure the required variables.

MOGODB_URL=mongodb://localhost:27017/employeeattendance
JWTSECRET_KEY=your_secret_key
PORT=5000


Replace the example JWT secret with a secure secret. Ensure the database configuration matches the environment variable names used by your application.

Running the Application
Development mode
npm run dev

Production mode
npm start


The application will run at the configured port. For example:

http://localhost:5000


Make sure MongoDB is running before starting the server.

API Routes

The API routes are mounted under /api.

Module	Base Endpoint
Authentication	/api/auth
Attendance	/api/attendence

The available endpoints, HTTP methods, request parameters, and authentication requirements are defined in the respective route files.

Testing the API

You can test the API using Postman or another REST API client.

Start the application.
Ensure the database connection is successful.
Send requests to the authentication and attendance endpoints.
Include the required request data and authorization token where applicable.
🎥 Coding Demonstration Video

Watch the recorded coding demonstration of this project:

Click here to watch the project coding video

Note: https://drive.google.com/file/d/17unABVUe5JRj2_xJQy4DpATWi6cxWHHr/view?usp=drive_link

Security Notes
Never commit your .env file or private credentials.
Use a strong JWT secret.
Hash passwords securely.
Validate incoming request data.
Protect restricted routes with authentication middleware.
Future Improvements
Add employee check-in and check-out functionality.
Provide attendance history and reports.
Add input validation and centralized error handling.
Implement automated API testing.
Document API endpoints with request and response examples.
Author

Vaishnavi

GitHub: vaishnavi-210407

License

This project uses the ISC License, as specified in package.json.
