**Employee Management System**

This project is a full-stack **Employee Management System** built with **React** for the frontend and **Node.js/Express** for the backend. It allows you to add, update, display, and delete employee records. The backend is connected to a **MongoDB** database to store employee data.

**Table of Contents**

- [Project Overview](#project-overview)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

**Project Overview**

This is a simple CRUD application where users can:

- **View a list of employees**
- **Add new employees**
- **Edit existing employee details**
- **Delete employees**

It also features a responsive frontend built with **React**, while the backend is powered by **Node.js**, **Express**, and **MongoDB**.

**Frontend Setup**

**Prerequisites**

- Node.js (v14 or higher)
- npm (Node Package Manager)

**Installation**

1. Clone this repository to your local machine:

```bash

git clone <https://github.com/your-username/employee-management-system.git>
```

1. Navigate to the frontend directory:

```bash

cd employee-management-system/frontend
```
1. Install the necessary dependencies:

```bash

npm install
```
1. Run the React development server:

```bash

npm start
```
The frontend will now be available at <http://localhost:3000>.

**Backend Setup**

**Prerequisites**

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (Local or Atlas)

**Installation**

1. Navigate to the backend directory:

```bash

cd employee-management-system/backend
```

1. Install the necessary dependencies:

```bash

npm install
```
1. Create a .env file to store your environment variables (MongoDB URI and JWT secret, if applicable):

```ini

MONGODB_URI=mongodb://localhost:27017/employeeDB

JWT_SECRET=your_secret_key

```

1. Run the backend server:

```bash

npm start
```
The backend API will now be available at <http://localhost:5000>.

**Database Setup**

1. Make sure **MongoDB** is installed and running.
2. Use MongoDB Atlas or a local MongoDB instance for storing employee data.
3. Ensure that the MONGODB_URI environment variable is set correctly in your .env file for connecting to your MongoDB instance.

**API Endpoints**

**1\. Get All Employees**

- **URL**: /api/employees/display
- **Method**: GET
- **Description**: Fetches the list of all employees.
- **Response**:

```json


{

"employees": \[

{

"\_id": "1",

"name": "John Doe",

"email": "<johndoe@example.com>",

"age": 30,

"salary": 50000

}

\]

}
```
**2\. Add a New Employee**

- **URL**: /api/employees/add
- **Method**: POST
- **Description**: Adds a new employee.
- **Request Body**:

```json

{

"name": "Jane Doe",

"email": "<janedoe@example.com>",

"age": 28,

"salary": 55000

}
```

**3\. Update an Employee**

- **URL**: /api/employees/:id
- **Method**: PUT
- **Description**: Updates an existing employee's details.
- **Request Body**:

```json

{

"name": "Nandhu,

"email": "<Nandhu@gmail.com>",

"age": 35,

"salary": 60000

}
```
**4\. Delete an Employee**

- **URL**: /api/employees/:id
- **Method**: DELETE
- **Description**: Deletes an employee by ID.

**Technologies Used**

- **Frontend**: React, Axios, PropTypes
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Development Tools**: Postman (for testing APIs), VSCode
