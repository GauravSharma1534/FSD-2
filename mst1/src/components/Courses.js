import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, name: "Computer Science" },
  { id: 2, name: "Information Technology" },
  { id: 3, name: "Artificial Intelligence" },
  { id: 4, name: "Data Science" },
  { id: 5, name: "Cyber Security" }
];

function Courses() {
  return (
    <div>

      <h2>Courses</h2>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              {course.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Courses;