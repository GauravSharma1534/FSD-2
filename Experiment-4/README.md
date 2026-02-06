## Aim

To understand and implement local state and global state management techniques in React by developing a counter application using React Hooks and Redux.

## Experiment Number
Experiment – 4

## Objective

To understand the concept of state in React
To implement component-level state using the useState hook
To manage application-wide state using Redux
To analyze the difference between local and global state management

## Introduction

State management is a core concept in React that controls how data changes over time and how the user interface responds to those changes. Proper state handling improves performance, readability, and scalability of applications.
This experiment focuses on understanding state behavior at different levels of a React application through practical implementation.

## Theory

In React, state represents dynamic data that influences component rendering.

## Local State

Local state is confined to a single component and is managed using React Hooks such as useState. It is suitable for small-scale data that does not need to be shared across components.

## Global State

Global state is used when multiple components require access to the same data. Redux provides a centralized store where application state is stored and updated in a predictable manner using reducers and actions.

## Redux follows a unidirectional data flow:

Action triggers a state change
Reducer updates the store
Updated state is reflected in components

## Problem Statement

As React applications grow in size, managing shared data between components becomes complex. This experiment addresses this issue by implementing Redux to handle shared state efficiently and maintain application scalability.

## Software and Hardware Requirements

Software Requirements
Node.js and npm
React JS
Vite
Redux and React Redux
Code editor (VS Code recommended)
Web browser

## Hardware Requirements

Minimum 4 GB RAM
Any modern operating system

## Experiment Description

A React-based counter application is developed using Vite to demonstrate two state management approaches:

## Local State Counter

Uses the useState hook where the state remains within a single component.

## Global State Counter

Uses Redux to store state in a centralized store, making it accessible across multiple components using the Provider.
This comparison clearly highlights the advantages and use cases of each approach.

## Technologies Used

React JS
Redux
React Redux
Vite
JavaScript (ES6)
HTML5
CSS3

## Features Implemented

Increment, decrement, and reset counter operations
Local state management using useState
Global state management using Redux Store
Centralized and predictable state updates
Modular and reusable component structure

## Project Structure

src/
│── assets/
│
│── components/
│   └── context/
│       ├── CounterGlobalContextAPI.jsx
│   ├── CounterGlobalContextParent.jsx
│   ├── CounterLocalState.jsx
│   └── CounterReduxParent.jsx
│
│── store/
│   ├── CounterReducer.jsx
│   └── Store.jsx
│
│── App.css
│── App.jsx
│── index.css
│── main.jsx

## Output

A functional counter using local state
A functional counter using Redux global state
Real-time UI updates when state changes

## Learning Outcomes

After completing this experiment, the learner will be able to:
Understand how state works in React
Differentiate between local and global state
Implement useState for component-level data
Use Redux for centralized state management
Develop scalable and maintainable React applications

## Applications

User dashboards
Shopping cart systems
Authentication and user session handling 
Data-driven web applications

## GitHub Upload Details

The complete source code is uploaded to GitHub for version control and reference.
GitHub Repository:
**https://github.com/GauravSharma1534/FSD-2** 

## Deployment Details

The project is deployed on Netlify for live demonstration.
Live Project (Netlify):
**https://23bda70050-experiment-4-gaurav.netlify.app/**

## Future Scope

Use of Redux Toolkit for simplified configuration
Integration with backend APIs
Advanced state handling using middleware
Improved UI and performance optimization

## Conclusion

This experiment successfully demonstrates the implementation of local and global state management in React. By comparing useState and Redux, the learner gains a clear understanding of how to manage application data efficiently and design scalable React applications.