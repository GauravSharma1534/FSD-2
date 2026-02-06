 # Experiment-6 #
Handle Forms and Validations in Frontend

# Aim #
To design and implement a frontend form with proper handling and validation to ensure correct and reliable user input.

# Objective #
To create a registration form in the frontend
To manage form data using state
To apply client-side validations
To follow unidirectional data flow
To display output only after successful validation

# Introduction #
Frontend forms are used to collect user data such as name, email, password, age, and contact number. Handling forms means managing user input through state, while validation ensures that incorrect or empty data is not submitted.
In this experiment, a registration form is built using React. All validations are performed on the client side to improve performance and user experience.

# Redux Follows a Unidirectional Data Flow #
Unidirectional data flow means data moves in one direction only:
User enters data in input fields
Data is stored in the component state
UI updates based on the state
This approach makes the application predictable, easier to debug, and maintainable.

 # Problem Statement #
To develop a frontend form that validates user input, shows error messages for invalid fields, and allows submission only when all inputs are valid.

# Libraries Used #
React – To build UI components
React Hooks (useState) – To manage form state and errors
Vite – For fast development and build process
JavaScript (ES6) – For validation logic
HTML5 – For form structure
CSS3 – For styling the form

# Software Requirements #
Node.js
npm
React.js
Vite
Web Browser (Chrome/Edge)

 # Project Structure #

 // text //

 src/
│── components/
│   └── Form.jsx
│── App.jsx
│── main.jsx
│── index.css

 //text //

 # Features # 
 Age input field
 Contact number input field
 Gender selection (Male, Female, Transgender)
 Terms and conditions checkbox
 Real-time error messages
 Client-side validation before submission

 # Technical Explanation #
 **useState** hook ka use karke form data store kiya
 Har input ko controlled component banaya
 **onChange** event se state update ki
 Submit se pehle validation function call kiya
 Valdation rules lagaye:
   Empty field check
   Email format check
   Numeric validation for age and contact number
   Gender selection compulsory
   Terms & conditions acceptance required
 Errors ko state me store karke UI me show kiya

 # Technical Working of Output #
 Application run hoti hai using npm run dev
Form browser me render hota hai
User jab input enter karta hai:
   **onChange** event trigger hota hai
   State update hoti hai
## Submit button click par:
   **handleSubmit()** function call hota hai
   Validation function execute hota hai
## Agar validation fail hoti hai:
  Errors state update hoti hai
  Error messages UI me show hote hai
  Form submit nahi hota
## Agar sab inputs valid hote hai:
  Form successfully submit hota hai
   Success message / output show hota hai
Page reload nahi hota (SPA behavior)

# Output #
Registration form successfully displayed
Invalid input par error messages shown
Valid input par successful form submission

# Learning Outcomes #
Form handling using React state
Client-side validation techniques
Controlled components ka practical use
Unidirectional data flow ka clear understanding

# Applications #
User registration systems
Login and signup forms
Online application portals
Feedback and survey forms

# Deployment Details #
Project ko locally run kiya using:
npm run dev
Browser me output successfully verified  

 # Netlify # 
Live URL:**https://experiment-6-23bda70050-gaurav-fsd.netlify.app/**

# Conclusion #
This experiment demonstrates how forms and validations are handled in the frontend using React. By applying client-side validation and unidirectional data flow, a secure, efficient, and user-friendly form is developed. This approach is widely used in real-world web applications.