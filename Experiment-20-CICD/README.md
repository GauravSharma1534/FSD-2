# Experiment 20: CI/CD Pipeline for Application Deployment

## Objective

To implement a CI/CD pipeline using Docker and GitHub Actions for application deployment.

---

## Tools & Technologies

* Docker
* GitHub Actions
* Python (Flask) – Backend
* Node.js – Frontend
* Git & GitHub

---

## Technical Details

### Backend

* Language: Python
* Framework: Flask
* Port: 5000
* Docker Base Image: `python:3.10`
* File: `run.py`

### Frontend

* Language: JavaScript
* Runtime: Node.js
* Port: 3000
* Docker Base Image: `node:18`
* File: `form.js`

### CI/CD

* Tool: GitHub Actions
* Trigger: Push to main branch
* Workflow File: `.github/workflows/main.yml`

---

## Project Structure

```id="qkj0d9"
Experiment-20-CICD/
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── run.py
│
├── frontend/
│   ├── Dockerfile
│   ├── form.js
│   ├── package.json
│   └── package-lock.json
│
├── .github/
│   └── workflows/
│       └── main.yml
│
└── README.md
```

---

## Backend Setup

```id="r1l9bb"
cd backend
docker build -t backend-app .
docker run -d -p 5000:5000 --name backend-container backend-app
```

---

## Frontend Setup

```id="0c1h7t"
cd frontend
docker build -t frontend-app .
docker run -d -p 3000:3000 --name frontend-container frontend-app
```

---

## Docker Output

* Backend running at: http://localhost:5000
* Frontend running at: http://localhost:3000

---

## CI/CD Pipeline (GitHub Actions)

* Automatically builds Docker images on push
* Ensures continuous integration of code
* Reduces manual deployment effort

---

## Screenshots

* Docker Images
* Running Containers (`docker ps`)
* GitHub Actions Pipeline

---

## Conclusion

Successfully implemented a CI/CD pipeline using Docker and GitHub Actions. The system automates build processes and improves deployment efficiency.

---

## Learning Outcomes

* Understanding of CI/CD concepts and workflow automation
* Hands-on experience with Docker image creation and containerization
* Ability to deploy backend and frontend applications using containers
* Knowledge of GitHub Actions for continuous integration
* Improved understanding of DevOps practices and automation pipelines
