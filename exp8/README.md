# Title #

Design and Development of a RESTful Backend Server using Python (Flask) with CRUD Operations and Cloud Deployment

# Aim #

To develop a RESTful backend server using Flask and implement CRUD operations for managing student data.

# Objective #

To understand **backend development using Flask**
To implement **REST APIs**
To perform **CRUD operations**
To test **APIs using Postman**
To deploy the backend on **Render**

# Languages Used #
**Python** (Core Backend Language)
**JSON**(Data exchange format)
**Bash/CLI** (Server execution & deployment)

## Technologies & Tools ##

Flask
Gunicorn
Postman
Git & GitHub
Render

 # Project Structure #

project/
│
├── app.py
├── run.py
├── requirements.txt
└── routes/
      └── student_routes.py

# Working #

Flask server handles **HTTP requests**.
CRUD operations are implemented **using REST principles**.
Student data is stored in an **in-memory list**.
JSON is used for request and response format.

**Example Student Object:**

{
  "id": **1**,
  "name": **"Gaurav Sharma"**,
  "uid": **"23bda70050"**,
  "age": **21**
}

 **Data resets when server restarts**.

# API Endpoints #

Method      	Endpoint	    Purpose
POST	       /students	   **Create student**
GET	           /students	   **Get all students**
GET	         **/students/<id>**	**Get student by ID**
PUT	            /students/<id>	 **Update student**
DELETE	         /students/<id>	  **Delete student**

# HTTP Status Codes Used #

**200 → Success**
**201 → Created**
**400 → Bad Request**
**404 → Not Found**

# Postman Output #

Home Route:

{
  "message": **"Gaurav Sharma"**
}

All CRUD APIs tested successfully:

**POST → 201 Created**
**GET → 200 OK**
**PUT → 200 OK**
****DELETE → 200 OK**

# Deployment #

Code pushed to **GitHub**
Connected to **Render**

Build Command:

**pip install -r requirements.txt**



# Backend successfully deployed and accessible via live URL. #

# Learning Outcomes #

**Backend development using Flask**
**REST API implementation**
**CRUD** operations
**JSON** handling
**API testing with Postman**
**Cloud deployment on Render**

 # Conclusion #

The backend server was successfully developed using Python and Flask. All CRUD operations were implemented and tested using Postman. The project was deployed on Render, meeting all objectives of the experiment.
The experiment provided practical understanding of RESTful backend architecture and API development.