# Experiment – 5 #
Optimize Frontend Performance Using Lazy Loading

# Aim #
To optimize frontend performance of a Single Page Application by implementing lazy loading for components.

# Objectives #
. To understand lazy loading in frontend applications
. To reduce initial page load time
. To load components only when required
. To improve performance and user experience in a Single Page Application

Introduction

In Single Page Applications, loading all components at once increases the initial page load time and negatively affects performance. Lazy loading is a technique in which components are loaded only when the user navigates to them.

In this experiment, a React-based Single Page Application is developed with multiple pages such as Home, About, and Contact. These components are loaded lazily using React’s lazy loading feature, which helps improve frontend performance and reduce unnecessary resource usage.

Problem Statement

To design a Single Page Application that loads components dynamically instead of loading everything at once, thereby optimizing frontend performance.

Libraries Used

React

React Router DOM

React Lazy and Suspense

Vite

JavaScript (ES6)

HTML5

CSS3

Software Requirements

Node.js

npm

React.js

Vite

Web Browser

Project Structure
src/
├── components/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css

Technical Concept: Lazy Loading

Lazy loading allows components to be loaded only when they are needed. Instead of importing components normally, they are imported dynamically using React.lazy().

Suspense is used to display a fallback user interface while the component is being loaded.

This reduces:

Initial bundle size

Page load time

Unnecessary resource usage

Technical Description

Single Page Application created using React and Vite

Routing implemented using React Router

Components imported using React.lazy()

Suspense used to handle loading state

Navigation links added for Home, About, and Contact

Footer added with student name and UID

Output

Application executed using npm run dev

Home page loads first

About and Contact components load only when clicked

Page does not reload, maintaining SPA behavior

Lazy loading verified through browser console and network tab

Result

SPA successfully loaded in the browser

Home, About, and Contact pages load dynamically

Faster initial load time achieved

Smooth navigation without page reload

Learning Outcomes

Practical understanding of lazy loading

Knowledge of SPA performance optimization techniques

Experience with dynamic component loading in React

Efficient resource usage

Applications

Large-scale web applications

Dashboards

E-commerce websites

Content-heavy Single Page Applications

Deployment Details

Application built using Vite

Project executed locally using npm run dev

Output verified in the browser

Netlify Deployment

Live URL:
https://experiment-5-23bda70050-gaurav-fsd.netlify.app/

Conclusion

This experiment demonstrates how lazy loading can be used to optimize frontend performance in a Single Page Application. By loading components only when required, the initial load time is reduced and the overall user experience is significantly improved.
