import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Unlock Your Potential with <span>Super Learning</span>
          </h1>
          <p>
            Transform your career with top online courses, expert instructors, and a global learning community.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="../components/images/hero.png" alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <div className="feature">
            <img src="icon1.png" alt="Expert Instructor" />
            <h3>Expert Instructors</h3>
            <p>Learn from industry experts with years of experience.</p>
          </div>
          <div className="feature">
            <img src="icon2.png" alt="Self Development" />
            <h3>Flexible Learning</h3>
            <p>Access courses anytime, anywhere, at your own pace.</p>
          </div>
          <div className="feature">
            <img src="icon3.png" alt="Lifetime Support" />
            <h3>Community Support</h3>
            <p>Join a global network of learners and mentors.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Super Learning is dedicated to providing top-quality education to help you achieve your career goals.
        </p>
        <img src="about-image.jpg" alt="About Us" />
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Super Learning</div>
          <p>© 2024 Super Learning. All rights reserved.</p>
          <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
