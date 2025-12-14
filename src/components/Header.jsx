import React, { useState, useEffect } from 'react';
import './Header.css';
import profileImg from '../assets/Copy.jpg';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('site-theme') || 'dark');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'AI & ML Engineer',
    'Data Scientist',
    'Computer Vision Engineer',
    'Robotics Engineer',
    'Project Manager',
    'Python Developer',
    'ML Researcher'
  ];

  // Auto-scroll roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('site-theme', newTheme);
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    if (newTheme !== 'light') {
      document.documentElement.classList.add(newTheme + '-theme');
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      const headerOffset = 90;
      const top = targetEl ? Math.max(targetEl.offsetTop - headerOffset, 0) : 0;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', href);
      setTimeout(closeNav, 650);
    }
  };

  return (
    <header className="top-header">
      <div className="header-container">
        <div className="header-profile">
          <img src={profileImg} alt="Profile" className="header-profile-img" />
          <div className="header-info">
            <h1 className="header-name">VINAY BADNORIYA</h1>
            <div className="header-role-container">
              <p className="header-role header-role-animated" key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </p>
            </div>
          </div>
        </div>

        <button
          id="navToggle"
          className="nav-toggle"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          ☰
        </button>

        <nav className={`top-nav ${isNavOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link active" onClick={handleNavClick}>Home</a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>About Me</a>
          <a href="#resume" className="nav-link" onClick={handleNavClick}>Resume</a>
          <a href="#portfolio" className="nav-link" onClick={handleNavClick}>Portfolio</a>
          <a href="#github" className="nav-link" onClick={handleNavClick}>GitHub</a>
          <a href="#testimonials" className="nav-link" onClick={handleNavClick}>Testimonials</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        </nav>

        <div className="header-theme">
          <div className="theme-toggle-wrapper">
            <input
              type="checkbox"
              className="theme-checkbox"
              id="theme-toggle"
              checked={theme === 'dark'}
              onChange={(e) => handleThemeChange(e.target.checked ? 'dark' : 'light')}
            />
            <label className="theme-toggle-label" htmlFor="theme-toggle">
              <span className="icon-sun">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              </span>
              <span className="icon-moon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </span>
              <span className="toggle-ball"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
