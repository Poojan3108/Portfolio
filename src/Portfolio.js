'use client'

import { useState, useEffect } from 'react'
import './App.css'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <header>
        <div className="logo" onClick={() => scrollTo('home')}>POOJAN'S PORTFOLIO</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <h1>Poojan Brahmbhatt</h1>
          <h3>AI/ML Engineer</h3>
          <button onClick={() => scrollTo('about')} className="cta">
            Explore My Work
          </button>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate web developer with a keen eye for design. With 5 years of experience,
              I specialize in creating responsive and user-friendly websites that leave a lasting impression.
              My expertise includes React, Node.js, and modern CSS techniques.
            </p>
          </div>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            {[
              { title: "Product Sentiment Analysis", desc: "A full-stack online store built with React and Node.js" },
              { title: "Digitone", desc: "A tool for creating stunning portfolios with ease" },
              { title: "Event Ledger", desc: "Real-time weather forecasts using modern APIs" },
              { title: "KBC", desc: "Real-time weather forecasts using modern APIs" }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <button className="project-link">View Project</button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          <div className="contact-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:jane@example.com">Email</a>
          </div>
        </section>
      </main>

        <div className='footer'>
            <p>&copy; 2024 Poojan's Portfolio. All rights reserved.</p>
        </div>
    </div>
  )
}