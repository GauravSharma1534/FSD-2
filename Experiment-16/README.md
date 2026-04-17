#  Experiment-16: Full Stack Testing & CI/CD

##  Introduction

This project shows a simple full-stack application with backend, frontend, testing, and CI/CD.
Backend is built using **Flask (Python)** and frontend using **Node.js (JavaScript)**.
Testing is done using **Pytest** and **Jest**, and automation is handled using **GitHub Actions**.

---

##  Objectives

* Build a backend API using **Flask**
* Create frontend logic using **JavaScript**
* Perform unit testing using **Pytest and Jest**
* Implement CI/CD pipeline
* Understand real project workflow

---

##  Technologies Used

* **Python (Flask)** – Backend
* **Pytest** – Backend Testing
* **Node.js** – Frontend
* **Jest** – Frontend Testing
* **GitHub Actions** – CI/CD
* **VS Code** – Development

---

##  Project Structure

```
Experiment-16/
 ├── backend/
 │    ├── app.py
 │    ├── test_api.py
 │    └── requirements.txt
 ├── frontend/
 │    ├── form.js
 │    ├── form.test.js
 │    ├── package.json
 │    └── package-lock.json
 ├── .github/workflows/
 │    └── ci.yml
 └── README.md
```

---

##  Backend Setup

### Step 1: Go to backend

```
cd Experiment-16/backend
```

### Step 2: Install dependencies

```
pip install -r requirements.txt
```

### Step 3: Run tests

```
python -m pytest
```

### Output

* API returns JSON response
* Test checks status code and data

---

## Frontend Setup

### Step 1: Go to frontend

```
cd Experiment-16/frontend
```

### Step 2: Install dependencies

```
npm install
```

### Step 3: Run tests

```
npm test
```

### Output

* Function works correctly
* Jest test passes

---

##  CI/CD Pipeline

### File Location

```
.github/workflows/ci.yml
```

### What it does

* Runs on push and pull request
* Installs backend dependencies
* Runs Pytest
* Installs frontend dependencies
* Runs Jest

---

##  How to Run in VS Code

1. Open folder **Experiment-16**
2. Open terminal (Ctrl + `)
3. Run backend and frontend commands
4. Check output



##  Learning Outcomes

After completing this experiment, you will learn:

* How to build backend using Flask
* How to write tests using Pytest
* How to test frontend using Jest
* How to manage project structure
* How to use npm and pip
* How CI/CD pipeline works
* How GitHub Actions automate testing
* How to debug common errors
* Importance of testing in development
* Integration of frontend and backend

---

## Common Errors & Fixes

### pytest not recognized

```
python -m pytest
```

### package.json issue

```
npm init -y
```

### Wrong directory

```
cd Experiment-16
```

---

##  Conclusion

This project helps in understanding full-stack development, testing, and automation.
It provides practical knowledge of real-world software development workflow.

---

---

##  Testing Summary

| Layer    | Tool           | Purpose          |
| -------- | -------------- | ---------------- |
| Backend  | Pytest         | API testing      |
| Frontend | Jest           | Function testing |
| CI/CD    | GitHub Actions | Automation       |

---
