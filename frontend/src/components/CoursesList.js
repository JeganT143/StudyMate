import React from 'react';
import CourseCard from './CourseCard';
import '../styles/CoursesList.css';

function CoursesList({ title, courses }) {
  return (
    <div className="courses-list">
      <h2>{title}</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
