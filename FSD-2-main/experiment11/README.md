#  Experiment 11: Microservices Backend using Flask

---

##  Aim

To develop a microservice-based backend module using Python (Flask) by creating separate services for customer and order management, and to test APIs using Postman.

---

##  Objectives

* To understand microservices architecture
* To create independent backend services
* To implement REST APIs using Flask
* To enable communication between services
* To test APIs using Postman

---

##  Tools & Technologies Used

* Python
* Flask
* Requests Library
* Postman
* Render (for deployment)

---

##  Theory

Microservices architecture is a design approach where an application is divided into small, independent services.
Each service performs a specific task and communicates with other services using APIs.

In this experiment:

* **Customer Service** handles customer data
* **Order Service** manages order details
* Both services communicate using HTTP requests

This approach improves scalability, flexibility, and maintainability.

---

##  Implementation

### 🔹 Customer Service

* API: `/customers/<user_id>/orders`
* Fetches customer details and their orders
* Calls Order Service using `requests`

###  Order Service

* API: `/orders/user/<user_id>` → Returns order details
* API: `/orders/<order_id>/status (PUT)` → Updates order status

---

##  API Endpoints

### 1. Get Customer Orders

```
GET /customers/101/orders
```

### 2. Get Orders

```
GET /orders/user/101
```

### 3. Update Order Status

```
PUT /orders/1/status
```

### Body:

```
{
  "order_status": "Delivered"
}
```

---

##  Testing

* APIs were tested using Postman
* GET requests returned customer and order data
* PUT request successfully updated order status
* Status code **200 OK** was received

---

##  Deployment

Both services were deployed on Render platform:

* Order Service: **(https://experiment-11-23bda70050-gaurav-sharma-1-6gig.onrender.com/)**
* Customer Service: **(https://experiment-11-23bda70050-gaurav-sharma-rvly.onrender.com/)**

---

##  Result

The microservice-based backend system was successfully developed.
All APIs worked correctly, and communication between services was achieved.

---

##  Conclusion

The experiment helped in understanding microservices architecture and REST API development using Flask.
It demonstrated how independent services can interact and handle different functionalities efficiently.

---




### Advantages

* Scalable
* Easy to maintain
* Independent services

### Disadvantages

* Complex setup
* Network dependency
* Debugging can be harder

---
