import React from 'react';
import Sidebar from '../components/Sidebar';
import CoursesList from '../components/CoursesList';
import '../styles/Courses.css';

const CoursesPage = () => {
  const featuredCourses = [
    { image: 'path/to/image1.jpg', title: 'Course 1', instructor: 'Instructor 1', price: 49.99 },
    { image: 'path/to/image2.jpg', title: 'Course 2', instructor: 'Instructor 2', price: 89.99 },
  ];

  const feedbacks = [
    { name: 'Student 1', feedback: 'This is an amazing course!' },
    { name: 'Student 2', feedback: 'Loved the instructor and content.' },
  ];

  const achievements = [
    { label: '50K+ Students', description: 'Enrolled worldwide' },
    { label: '50+ Courses', description: 'Covering various topics' },
    { label: '4K+ Classes', description: 'Conducted online' },
    { label: '4.8 Rating', description: 'Average user rating' },
  ];

  return (
    <div className="courses-page">
    
      <header className="courses-header">
        <div className="header-content">
          <h1>Learn Something New</h1>
          <p>Everyday, Anywhere, Anytime</p>
          <button className="cta-button">Start Free Trial</button>
        </div>
      </header>
      <main>
        <div className="courses-container">
          <Sidebar />
          <section className="courses-intro">
            <h2>Courses to Get You Started</h2>
            <CoursesList title="Featured Courses" courses={featuredCourses} />
            <CoursesList title="Most Popular" courses={featuredCourses} />
            <CoursesList title="Latest" courses={featuredCourses} />
          </section>
        </div>
        <section className="student-feedback">
          <h2>Enroll Students' Feedback</h2>
          <div className="feedback-container">
            {feedbacks.map((fb, index) => (
              <div key={index} className="feedback-card">
                <p>{fb.feedback}</p>
                <h4>{fb.name}</h4>
              </div>
            ))}
          </div>
        </section>
        <section className="achievements">
          <h2>Our Achievements</h2>
          <div className="achievements-container">
            {achievements.map((ach, index) => (
              <div key={index} className="achievement-card">
                <h3>{ach.label}</h3>
                <p>{ach.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Super Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CoursesPage;
