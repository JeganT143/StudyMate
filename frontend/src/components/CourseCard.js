import React from 'react';
import '../styles/CourseCard.css';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.instructor}</p>
      <p>${course.price}</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseCard;
