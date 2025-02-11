To test the API in **Postman**, make sure your backend is running and that you have the correct API endpoints. Here are the endpoints based on your frontend implementation:

**1\. Get All Employees (Test Read API)**

- **Method**: GET
- **URL**:

```bash

<http://localhost:5000/api/employees/display>
```
- **Expected Response (Example)**:

```json

\[

{

"id": 1,

"name": "John Doe",

"email": "<johndoe@example.com>",

"age": 30,

"salary": 50000

},

{

"id": 2,

"name": "Jane Smith",

"email": "<janesmith@example.com>",

"age": 25,

"salary": 60000

}

\]
```
**2\. Add a New Employee (Test Create API)**

- **Method**: POST
- **URL**:

```bash

<http://localhost:5000/api/employees/add>
```
- **Headers**:

pgsql

Content-Type: application/json

- **Body (Raw JSON - Example)**:

```json

{

"name": "Alice Johnson",

"email": "<alice@example.com>",

"age": 28,

"salary": 55000

}
```
- **Expected Response (Example)**:

```json

{

"message": "Employee added successfully",

"employee": {

"id": 3,

"name": "Alice Johnson",

"email": "<alice@example.com>",

"age": 28,

"salary": 55000

}

}
```
**3\. Update an Employee (Test Update API)**

- **Method**: PUT
- **URL**:

```bash

<http://localhost:5000/api/employees/67a9e24fe24ab66c0bd6f997>
```
_(Replace 3 with the actual id of the employee you want to update)_

- **Headers**:

pgsql

Content-Type: application/json

- **Body (Raw JSON - Example)**:

``json

{

           "name": "Nandhini",

           "email": "<Nandhini@gmail.com>",

           "age": 26,

           "salary": 150000

}
```
- **Expected Response (Example)**:

```json

{

   "message": "Employee updated successfully",

   "employee": {

       "\_id": "67a9e24fe24ab66c0bd6f997",

      "name": "Nandhini",

       "email": "<Nandhini@gmail.com>",

       "age": 26,

       "salary": 150000,

       "createdAt": "2025-02-10T11:26:07.663Z",

       "updatedAt": "2025-02-11T07:28:01.936Z",

       "\__v": 0

   }

}
```
**4\. Delete an Employee (Test Delete API)**

- **Method**: DELETE
- **URL**:

```bash

<http://localhost:5000/api/employees/3>
```
_(Replace 3 with the actual id of the employee you want to delete)_

- **Expected Response (Example)**:

```json

{

"message": "Employee deleted successfully"

}
```
**How to Test in Postman**

1. Open **Postman**.
2. Select the correct **HTTP method** (GET, POST, PUT, DELETE).
3. Enter the API **URL** in the request bar.
4. If needed, go to the **Body** tab → Select **Raw** → Choose **JSON** → Enter the test JSON data.
5. Click **Send** and check the response.

**If Any API Fails:**

1. Check if your backend is running.
2. Verify if the endpoint paths are correctly set in your backend.
3. If getting an error, share the Postman response or console logs.
4. **nodemon not recognized**:
    - If nodemon is not installed, you can install it globally using the following command:

```bash

npm install -g nodemon
```
- - Or, you can install it locally:

```bash

npm install --save-dev nodemon
```
Then, run it using npx.

1. **Other Errors:** 

**What you should try:**

1. Run the command:

```bash

npx nodemon server.js
```
