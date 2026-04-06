# **Experiment 13 - Flask MySQL CRUD API**

## **Title**
Connect backend with database and perform CRUD operations along with validations 

## **Objective**
To build a Flask backend and connect it with MySQL database to perform CRUD operations with validation.

## **Technologies Used**
- **Python (Flask)**
- **MySQL**
- **SQLAlchemy**
- **Marshmallow**
- **PyMySQL**
- **Postman**
- **Render**

## **Features**
- **Create Student**
- **Read All Students**
- **Read Single Student**
- **Update Student**
- **Delete Student**
- **Validation**
- **Database Connectivity**

## **Database**
**Database Name:** chandigarh_university_db  
**Table Name:** students  

## **API Endpoints**
- **POST /students**
- **GET /students**
- **GET /students/<id>**
- **PUT /students/<id>**
- **DELETE /students/<id>**

## **Sample JSON**
{
  "uid": "CU001",
  "name": "Gaurav",
  "age": 21
}

## **Run Project**
1. python -m venv venv  
2. venv\Scripts\activate  
3. pip install flask flask-sqlalchemy pymysql marshmallow cryptography  
4. python app.py  

## **Output**
http://127.0.0.1:5000  

## **Postman Testing**
- POST → Data inserted successfully  
- GET → Data retrieved successfully  
- PUT → Data updated successfully  
- DELETE → Data deleted successfully  

## **Database Verification**
SELECT * FROM students;

## **Conclusion**
Successfully implemented Flask backend with MySQL database and performed CRUD operations with validation.

##  Learning Outcomes

- Understood how to build backend using Flask (Python)
- Learned to create REST APIs (GET, POST, PUT, DELETE)
- Connected Flask application with MySQL database
- Performed CRUD operations on database
- Implemented input validation and error handling
- Tested APIs using Postman
- Gained knowledge of frontend-backend integration