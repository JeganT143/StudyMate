import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>It's time to amplify your <span>Online Career</span></h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="your-hero-image.jpg" alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="icon1.png" alt="Expert Instructor" />
          <h3>Expert Instructor</h3>
          <p>Learn from the best instructors around the world.</p>
        </div>
        <div className="feature">
          <img src="icon2.png" alt="Self Development" />
          <h3>Self Development</h3>
          <p>Boost your skills to achieve your goals.</p>
        </div>
        <div className="feature">
          <img src="icon3.png" alt="Lifetime Support" />
          <h3>Lifetime Support</h3>
          <p>Access support anytime you need it.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About</h2>
        <p>
          Super Learning encourages a mindset of continuous improvement and lifelong learning.
        </p>
        <img src="about-image.jpg" alt="About Us" />
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>What is Super Learning?</h4>
          <p>Super Learning is an online platform for professional growth.</p>
        </div>
        {/* Add more FAQ items */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Super Learning. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
