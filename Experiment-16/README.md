# Experiment-16: Full Stack Testing & CI/CD

## Introduction
This project demonstrates a simple full-stack application with backend, frontend, testing, and CI/CD integration. It helps in understanding how real-world software systems are developed, tested, and deployed using automation tools.

The backend is developed using Flask (Python), while the frontend is built using Node.js (JavaScript). Testing is performed using Pytest for backend and Jest for frontend. GitHub Actions is used to automate the testing process through a CI/CD pipeline.

This experiment is designed to give hands-on experience in building a complete application with proper testing and automation practices.

---

## Objectives
- Build a backend API using Flask
- Create frontend logic using JavaScript
- Perform unit testing using Pytest
- Perform unit testing using Jest
- Understand CLI-based testing
- Learn how CI/CD pipelines work
- Automate testing using GitHub Actions
- Understand project structure and organization
- Learn debugging and error handling
- Gain real-world development experience

---

## Technologies Used
- Python (Flask) – Backend development
- Pytest – Backend testing framework
- Node.js – Frontend runtime
- Jest – Frontend testing framework
- GitHub Actions – CI/CD automation
- Git – Version control system
- VS Code – Development environment

---

# Project Structure #

```
Experiment-16/
├── backend/
│   ├── app.py
│   ├── test_api.py
│   └── requirements.txt
├── frontend/
│   ├── form.js
│   ├── form.test.js
│   ├── package.json
│   └── package-lock.json
├── screenshots/
│   ├── ci-summary.png
│   └── ci-full-run.png
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

## Backend Development

The backend is created using Flask, a lightweight Python web framework.

### Features
- Simple API creation
- JSON response handling
- Easy integration with testing tools

### Example Functionality
- API returns a JSON message
- Status code verification

---

## Backend Setup

Step 1: Navigate to backend folder
cd Experiment-16/backend

Step 2: Install dependencies
pip install -r requirements.txt

Step 3: Run the backend tests
python -m pytest

---

## Backend Testing (Pytest)

Pytest is used to test backend APIs.

### Purpose
- Validate API responses
- Check status codes
- Ensure correct output

### Output
- Tests pass successfully
- Correct response from API

---

## Frontend Development

The frontend is developed using JavaScript.

### Features
- Simple form logic
- Input handling
- Output processing

---

## Frontend Setup

Step 1: Navigate to frontend folder
cd Experiment-16/frontend

Step 2: Install dependencies
npm install

Step 3: Run tests
npm test

---

## Frontend Testing (Jest)

Jest is used for testing frontend functionality.

### Purpose
- Validate JavaScript functions
- Ensure correct logic execution
- Detect errors early

### Output
- Test cases pass
- Function returns correct values

---

## CLI Testing

All tests are performed using CLI (Command Line Interface).

### Backend
python -m pytest

### Frontend
npm test

---

## CI/CD Pipeline

CI/CD is implemented using GitHub Actions.

### File Location
.github/workflows/ci.yml

### Workflow Features
- Automatically triggers on push
- Installs backend dependencies
- Runs Pytest
- Installs frontend dependencies
- Runs Jest
- Displays results in GitHub Actions

---


## How to Run in VS Code

- Open project folder in VS Code
- Open terminal using Ctrl + `
- Navigate to backend/frontend
- Run commands
- View output in terminal

---

## Common Errors and Solutions

Error: pytest not recognized  
Solution: python -m pytest  

Error: npm not working  
Solution: npm install  

Error: wrong directory  
Solution: cd Experiment-16  

Error: jest not found  
Solution: npm install --save-dev jest  

---

## Advantages of Testing

- Improves code quality
- Detects bugs early
- Saves development time
- Increases reliability
- Ensures correct functionality

---

## Testing Summary

Backend – Pytest – API testing  
Frontend – Jest – Function testing  
CI/CD – GitHub Actions – Automation  

---

## Learning Outcomes

After completing this experiment, you will learn:

- How to build backend using Flask  
- How to test APIs using Pytest  
- How to test frontend using Jest  
- How to structure a full-stack project  
- How to use Git and GitHub  
- How CI/CD pipelines work  
- How automation improves development  
- How to debug common errors  
- Importance of software testing  

---

## Real-World Applications

- Web application development
- API testing
- Automation pipelines
- Software testing processes
- DevOps practices

---

## Conclusion

This experiment provides a complete understanding of full-stack development, testing, and CI/CD. It demonstrates how backend and frontend systems can be tested and automated using modern tools.

The use of GitHub Actions ensures that testing is automated, reducing manual effort and improving reliability. This project is a good example of real-world software development workflow.

---

