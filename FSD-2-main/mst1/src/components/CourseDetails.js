import React from "react";
import { useParams } from "react-router-dom";

const courseDetails = {
  1: "Computer Science: Learn programming and software development.",
  2: "Information Technology: Study networking and IT systems.",
  3: "Artificial Intelligence: Learn machine learning concepts.",
  4: "Data Science: Analyze data and build predictive models.",
  5: "Cyber Security: Learn how to protect computer systems."
};

function CourseDetails() {

  const { id } = useParams();

  return (
    <div>

      <h2>Course Details</h2>

      <p>{courseDetails[id]}</p>

    </div>
  );
}

export default CourseDetails;