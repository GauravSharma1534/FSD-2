#  Experiment 13 – Flask CRUD API

##  Title
Flask Backend with Database Integration for CRUD Operations and Validation

---

##  Objective
To develop a Flask-based backend application connected with a database and perform CRUD operations (Create, Read, Update, Delete) with validation and error handling.

---

##  Technologies Used
- Python (Flask)
- SQLite (for deployment)
- SQLAlchemy
- Marshmallow
- Postman
- Render

---

##  Features
- Create Student
- Read All Students
- Read Single Student
- Update Student
- Delete Student
- Input Validation
- Error Handling
- Search Student (Bonus)
- Count Students (Bonus)

---

##  Database
- Database: SQLite (`database.db`)
- Table: `students`

---

##  API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| POST   | /students | Create new student |
| GET    | /students | Get all students |
| GET    | /students/<id> | Get single student |
| PUT    | /students/<id> | Update student |
| DELETE | /students/<id> | Delete student |
| GET    | /students/search?name=xyz | Search student |
| GET    | /students/count | Total students |


{
  "uid": "CU101",
  "name": "Gaurav Sharma",
  "age": 21
}
Run Project (Local)
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
 Live API

👉 https://experiment-13-23bda70050-gaurav-sharma-6.onrender.com/

🧪 Postman Testing
POST → Insert student data
GET → Fetch all students
PUT → Update student
DELETE → Delete student
 Example Response
{
  "id": 1,
  "uid": "CU101",
  "name": "Gaurav Sharma",
  "age": 21
}
Database Verification
SELECT * FROM students;
 Conclusion

Successfully developed a Flask backend application with database integration and implemented full CRUD operations along with validation and error handling.

 Learning Outcomes
Learned Flask backend development
Understood REST API concepts
Connected backend with database
Implemented CRUD operations
Applied validation using Marshmallow
Tested APIs using Postman
Deployed application using Render
