// pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mt-5" style={{
      maxWidth: '700px',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      padding: '2.5rem 2rem',
      color: '#222',
      fontFamily: 'Inter, Arial, sans-serif'
    }}>
      <h2 className="mb-4" style={{
        fontWeight: 700,
        fontSize: '2.2rem',
        color: '#1a237e',
        letterSpacing: '-1px'
      }}>
        About Brand Snap
      </h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.2rem', lineHeight: 1.7 }}>
        Brand Snap is a free, student-built tool that helps you edit and optimize images online — no apps, no accounts, no stress.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.2rem', lineHeight: 1.7 }}>
        Whether you're a student submitting assignments or a blogger posting content, large image files slow you down.
        Brand Snap solves that by letting you compress and resize images right in your browser.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.2rem', lineHeight: 1.7 }}>
        We built this tool to be lightning fast, private, and super easy to use. Unlike many editing apps,
        Brand Snap doesn't watermark your photos or limit features behind a paywall. It's 100% free for everyone.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.2rem', lineHeight: 1.7 }}>
        We're currently adding even more features like background removal and smart cropping powered by AI.
        This is just the beginning <span role="img" aria-label="rocket">🚀</span>
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 0, lineHeight: 1.7 }}>
        If you'd like to support the project or request features, reach out through the Contact section!
      </p>
    </div>
  );
};

export default About;
