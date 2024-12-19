import React from 'react';
import '../styles/Courses.css';

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <header className="courses-header">
        <h1>Learn Something New</h1>
        <p>Everyday, Anywhere, Anytime</p>
        <div className="free-trial">
          <form>
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Start 7 Days Trial</button>
          </form>
        </div>
      </header>
      <main>
        <section className="courses-intro">
          <h2>Courses to get you started</h2>
          {/* Add filters and course listings */}
        </section>
        <section className="student-feedback">
          <h2>Enroll Students' Feedback</h2>
          {/* Add testimonials */}
        </section>
        <section className="achievements">
          <h2>Our Achievements</h2>
          {/* Add achievements */}
        </section>
      </main>
      <footer>
        {/* Footer Section */}
      </footer>
    </div>
  );
};

export default CoursesPage;