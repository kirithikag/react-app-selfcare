import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="home-container">
      <header className="header">
        <button className="nav-toggler" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/habit-tracker" className="nav-link">Habit Tracker</Link>
          <Link to="/reminders" className="nav-link">Reminders</Link>
          <Link to="/progress" className="nav-link">Progress</Link>
        </nav>
      </header>
      <main className="main-content">
        <h1>Welcome to Your Self-Care Tracker</h1>
        <p>Track your habits, set reminders, and monitor your progress to enhance your daily routine and overall well-being.</p>
        <section className="benefits-section">
          <h2>Benefits of a Daily Routine</h2>
          <ul>
            <li>Improves productivity and focus</li>
            <li>Enhances mental clarity and reduces stress</li>
            <li>Promotes healthier lifestyle habits</li>
            <li>Provides structure and consistency to your day</li>
            <li>Encourages better sleep and energy levels</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;
