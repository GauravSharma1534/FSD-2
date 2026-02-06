# Experiment-5 #
Optimize Frontend Performance Using Lazy Loading

# Aim #
To optimize frontend performance of a Single Page Application by implementing lazy loading for components.

# Objective #

To understand lazy loading in frontend applications
To reduce initial page load time
To load components only when required
To improve performance and user experience in SPA

# ntroduction # 

In Single Page Applications, loading all components at once increases initial load time. Lazy loading is a technique where components are loaded only when the user navigates to them.
In this experiment, a React SPA is developed with multiple pages such as Home, About, and Contact. These components are loaded lazily using React’s lazy loading feature, which improves frontend performance.

 # Problem Statement #
To design a Single Page Application that loads components dynamically instead of loading everything at once, thereby optimizing frontend performance.

# Libraries Used #
React
React Router DOM
React Lazy and Suspense
Vite
JavaScript (ES6)
HTML5
CSS3

# Software Requirements #
Node.js
npm
React.js
Vite
Web Browser

# Libraries Used: #
React
React Router DOM
React Lazy (React.lazy)
React Suspense (Suspense)
Vite
JavaScript (ES6)
HTML5
CSS3

 # Project Structure #
 
src/
├── components/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css


# Technical Concept: Lazy Loading# 

Lazy loading allows components to be loaded only when they are needed. Instead of importing components normally, they are imported dynamically using React.lazy().

**Suspense** is used to show a fallback UI while the component is being loaded.

This reduces:
Initial bundle size
Page load time
Unnecessary resource usage

# Technical #

SPA created using React and Vite
Routing implemented using React Router
Components imported using **React.lazy()**
**Suspense** used to handle loading state
Navigation links added for Home, About, and Contact
Footer added with UID and student name

# Output #
Application run ki using:
  npm run dev
Home page sabse pehle load hota hai
About aur Contact components tab load hote hain jab user click karta hai
Page reload nahi hota (SPA behavior)
Console/network se verify hota hai ki components lazy load ho rahe hain

 # Output #

SPA successfully loaded in browser
Home, About, and Contact pages load dynamically
Faster initial load time
Smooth navigation without page reload

# Learning Outcomes #

Lazy loading ka practical understanding
SPA performance optimization techniques
Dynamic component loading in React
Efficient resource usage

# Applications #

Large scale web applications
Dashboards
E-commerce websites
Content heavy SPAs

# Deployment Details #

Application built using Vite
Project executed locally using:
   npm run dev
Output verified in browser

# Netlify # 
Live URL:**https://experiment-5-23bda70050-gaurav-fsd.netlify.app/**

# Conclusion # 
This experiment demonstrates how lazy loading can be used to optimize frontend performance in a Single Page Application. By loading components only when required, initial load time is reduced and overall user experience is improved.
