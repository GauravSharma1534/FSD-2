 # Experiment – 5 #
Title: Optimize Frontend Performance Using Lazy Loading

# Aim #
To optimize frontend performance of a Single Page Application by implementing lazy loading for components.

# Objectives #

* To understand lazy loading in frontend applications.
* To reduce initial page load time
* To load components only when required
* To improve performance and user experience in a Single Page Application

# Introduction # 

* In Single Page Applications, loading all components at once increases initial load time.
* This negatively affects application performance and user experience.
* Lazy loading is a technique in which components are loaded only when the user navigates to them.
* In this experiment, a React-based SPA is created with Home, About, and Contact pages.
* These components are loaded lazily using React lazy loading to improve performance.

# Problem Statement # 
To design a Single Page Application that dynamically loads components instead of loading all components at once, thereby optimizing frontend performance.

# Libraries Used # 
* React
* React Router DOM
* React Lazy and Suspense
* Vite
* JavaScript (ES6)
* HTML5
* CSS3

# Software Requirements #

* Node.js
* npm
* React.js
* Vite
* Web Browser

# Project Structure # 

```text
src/
├── components/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

# Technical Concept: Lazy Loading #

* Lazy loading loads components only when required.
* Components are imported dynamically using React.lazy().
* Suspense is used to display a fallback UI while components load.
* This helps in reducing:

## Initial bundle size ##
* Page load time
* Unnecessary resource usage
  
# Technical Description #

* Single Page Application developed using React and Vite.
* Routing implemented using React Router.
* Components imported using React.lazy().
* Suspense used to handle loading state.
* Navigation links provided for Home, About, and Contact pages.
* Footer added with student name and UID.

# Output #

* Application executed using npm run dev.
* Home page loads first.
* About and Contact components load only when clicked.
* Page does not reload, maintaining SPA behavior.
* Lazy loading verified using browser console and network tab.

# Result #
* SPA successfully loaded in the browser.
* Home, About, and Contact pages loaded dynamically.
* Faster initial page load time achieved.
* Smooth navigation without page reload observed.

# Learning Outcomes #

* Understood the concept of lazy loading.
* Learned SPA performance optimization techniques.
* Gained experience in dynamic component loading using React.
* Learned efficient resource utilization.

# Applications #
* Large-scale web applications
* Dashboards
* E-commerce websites
* Content-heavy Single Page Applications

# Deployment Details #
* Application built using Vite.
* Project executed locally using npm run dev.
* Output verified in the browser.

# Application deployed on Netlify. #
## Live URL: ##
**https://experiment-5-23bda70050-gaurav-fsd.netlify.app/**

# Conclusion #
This experiment demonstrates the use of lazy loading to optimize frontend performance in a Single Page Application. By loading components only when required, initial load time is reduced and overall user experience is improved.
