# Role-Based Access Control in Node.js

A comprehensive Node.js application demonstrating secure **Admin** and **User Role-Based Access Control** (RBAC) using **Express.js**. This project ensures that users have different levels of access based on their roles, enhancing the security and functionality of your application.

## 🚀 Features

- **Role-Based Access Control (RBAC):** Define and manage `Admin` and `User` roles with fine-grained permissions.
- **User Authentication:** Secure login and signup with hashed passwords using `bcryptjs`.
- **Token-Based Authorization:** JWT for session management and secure API access.
- **Database Integration:** MongoDB for storing user and role data.
- **Secure Routes:** Protect API endpoints based on user roles.

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Fast and minimal web framework.
- **MongoDB**: Database for managing users and roles.
- **JWT (jsonwebtoken)**: Secure token-based authentication.
- **bcryptjs**: Secure password hashing.

## Installation

1 Clone the repository:
git clone https://github.com/SONALI-PRJAPATI/SecureRBAC.gi
cd role-based-access-control

2 Install dependencies:
npm install
3 Set up environment variables: Create a .env file in the root directory and add the following:
PORT=4000
MONGODB_URL='mongodb://localhost:27017/RBCA'
JWT_SECRETE='RBCA'

4 Start the development server:
npm run dev

## Testing
   1 Use tools like Postman or cURL to test the API endpoints.
   2 Ensure the correct token is sent in the Authorization header for protected routes: 
      Authorization: Bearer <your_token>

## Security Notes
 -Passwords are hashed using bcryptjs to ensure secure storage.
 -JWTs are used for stateless authentication and include role information for RBAC.
 -Middleware is used to protect sensitive routes and enforce role-based permissions.

## 🔑 API Endpoints
Authentication Routes
Method        	Endpoint	              Description	Role Access
POST	      /api/auth/register	       Register a new user	Public
POST	      /api/auth/login	           Authenticate a user	Public
Protected Routes
Method	        Endpoint	              Description	Role Access
GET	            /admin/getallusers	            Fetch all users (admin only)	Admin
GET	            /admin/deleteuser                delete user profile	User, Admin

## 📂 Project Structure**
```plaintext
role-based-access-control/
├── models/
│   ├── User.js            # User model schema
├── middleware/
│   ├── isAdmin.js  # JWT and role-based middleware
├── routes/
│   ├── auth.js      # Routes for user authentication
│   ├── Admin.js      # Routes for admin
├── .env                   # Environment variables
├── index.js              # Main server file
├── README.md              # Project documentation

