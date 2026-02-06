# EXPERIMENT – 6 # 
# Title #
Form Handling and Validation in Frontend using React


# Aim # 
To design and implement a registration form with proper form handling and client-side validation using React.

# Objective #

* To create a user registration form
* To handle form input using React state
* To apply validations before form submission
* To follow unidirectional data flow
* To prevent invalid data submission
* To deploy the frontend application on Netlify

# Description #

* In this experiment, a registration form is developed using React. The form collects user details such as name, email, password, age, contact number, gender, and agreement to terms and conditions.
* All inputs are validated on the client side to ensure correct and reliable user data. React state is used to manage form values and validation errors. The application works as a Single Page Application (SPA) and is deployed on Netlify.

# Registration Form Data #
The registration form includes the following fields:

## Personal Information ##
* **Name** – Text input, cannot be empty
* **Email** – Must follow a valid email format
* **Password** – Minimum length validation applied

## Additional Details ## 
* **Age** – Numeric input, only numbers allowed
* **Contact Number** – Numeric input with length validation

## Gender Selection ##
* Male
* Female
* Transgender

# Terms and Conditions # 
Checkbox: **I agree to the terms and conditions**
* Mandatory to select before submission

# Technologies Used #
* React.js
* Vite
* JavaScript (ES6)
* HTML5
* CSS3

# Libraries Used # 
* **React** – For UI development
* **React Hooks (useState)** – For state and error handling

# Software Requirements #

* Node.js
* npm
* React
* Vite
* VS Code
* Web Browser (Chrome / Edge)

# Project Structure

```text
src/
│── components/
│   └── Form.jsx
│── App.jsx
│── main.jsx
│── index.css
```


# Technical Explanation #
* The **useState** hook is used to store form values and validation errors.
* All inputs are created as **controlled components**.
* The **onChange** event updates state whenever the user types or selects data.
* A validation function is executed before form submission.
* Validation rules applied:
   * Empty field validation
   * Email format validation
   * Numeric validation for age and contact number
   * Mandatory gender selection
   * Mandatory acceptance of terms and conditions
* Error messages are stored in state and shown below respective fields.

# Technical Working of Output #
* The application is started using **npm run dev**.
* The registration form is rendered in the browser.

## User Interaction Flow ##
* User enters data into input fields
* **onChange** event updates state
* UI reflects updated state instantly

# On Submit Button Click
* **handleSubmit()** function is called
* Validation logic is executed

# If Validation Fails #
* Error state is updated
* Error messages are displayed
* Form submission is stopped

# If Validation Passes #
* Form is submitted successfully
* Success message is displayed
* Page does not reload (SPA behavior)

# Features #

* Registration form with multiple input types
* Real-time validation feedback
* Controlled components
* Client-side validation
* Single Page Application behavior
* Responsive UI

# Output #

* Registration form displayed successfully
* Error messages shown for invalid input
* Successful submission for valid data
* Smooth user experience without page reload

# Deployment Details #
The project is deployed on Netlify.
## Live URL:
**https://experiment-6-23bda70050-gaurav-fsd.netlify.app/**

# Learning Outcomes
* Understanding of React form handling
* Client-side validation techniques
* Practical use of controlled components
* Clear understanding of unidirectional data flow
* Experience with frontend deployment using Netlify

# Applications

* User registration systems
* Login and signup forms
* Online application portals
* Feedback and survey forms

# Conclusion

This experiment successfully demonstrates form handling and validation in a frontend application using React. Client-side validation ensures data accuracy and improves user experience. The use of React state and SPA architecture makes the application efficient, scalable, and suitable for real-world web applications.
