# Aim # 

Experiment No. 9 Implement authentication using JWT

# Overview #
This project demonstrates different **authentication mechanisms in a Flask API.**
It implements three authentication techniques commonly used in web applications and REST APIs.

Authentication methods included:

Basic Authentication

Simple Token Authentication

JWT (JSON Web Token) Authentication

The API is built using **Python Flask** and **flask-jwt-extended**.

# Features #

User authentication with three methods

Secure access to protected routes

Token generation and validation

JWT-based authentication for modern APIs

Simple in-memory user store

# Technologies Used #

Python

Flask

Flask-JWT-Extended

Base64 Encoding

REST API

Postman (for testing)

 # Project Structure #

 
# Project Structure #

```
Experiment9/
│
├── app.py
├── requirements.txt
└── README.md
```

## Installation and Setup ##

# 1. Clone Repository

**git clone https://github.com/GauravSharma1534/FSD-2.git**

**cd Experiment9**

# 2. Create Virtual Environment

Linux / Mac

**python3 -m venv venv**

**source venv/bin/activate**

# Windows #

**python -m venv venv**

**venv\Scripts\activate**

## 3. Install Dependencies

**pip install -r requirements.txt**

# 4. Run Application
**python app.py**

Server runs at:

**http://localhost:5000**

## Deployed API (Render)

Live URL:

**https://experiment-9-23bda70050-gaurav-sharma.onrender.com**

# Available Routes

## Route	                      Method	                   Description

/	GET            	             Home                        route

/basic-protected	               GET                     	Basic Authentication 

/token-login	                   POST	                    Generate simple token

/token-protected    	            GET	                        Access using token

/jwt-login 	                    POST	                       Generate JWT 

/jwt-protected	                  GET	                        Access using JWT

# Test APIs Using Postman

## 1 Basic Authentication

Endpoint

**GET /basic-protected**

# Authorization

Basic Auth

**Username : admin**

**Password : admin123**

# Response

{

**"message": "Basic Auth Success. Welcome admin!"**
 
}

# 2 Token Authentication

## Login to Get Token

# Endpoint

**POST /token-login**

# Body
{

 **"username": "admin",**
 
 **"password": "admin123"**
 
}

# Response

{

 **"token": "YWRtaW4="**
 
}

# Access Protected Route

## Endpoint

**GET /token-protected**

# Header

**x-auth-token : YWRtaW4=**

# Response
{

**"message": "Token Auth Success. Welcome admin!"**
}

# 3 JWT Authentication

## Login to Get JWT Token

Endpoint

**POST /jwt-login**

# Body

{

 **"username": "admin",**
 
 **"password": "admin123"**
}

# Response

{

 **"access_token": "JWT_TOKEN"**
 
}

# Access JWT Protected Route

## Endpoint

**GET /jwt-protected**

# Header

**Authorization : Bearer JWT_TOKEN**

# Response

{

 **"message": "JWT Auth Success. Welcome admin!"**
 
}

# Default Users

**Username : admin**

**Password : admin123**

**Role : admin**

**Username : Gaurav**

**Password : Gaurav123**

**Role : user**

# Advantages of JWT Authentication

Stateless authentication

Secure token-based access

Scalable for distributed systems

Widely used in modern APIs

# Real World Applications

Login systems

REST APIs

Microservices authentication

Mobile app backends

Secure web services


# GitHub:

**https://github.com/GauravSharma1534**

# Project Repository:

**https://github.com/GauravSharma1534/FSD-2**
