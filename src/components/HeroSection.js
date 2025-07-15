// components/HeroSection.jsx
import React from 'react';

// Add some custom styles for a more professional look
const heroSectionStyle = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
    borderRadius: '18px',
    boxShadow: '0 6px 32px rgba(60, 72, 88, 0.12)',
    padding: '48px 32px',
    marginTop: '40px',
};

const headingStyle = {
    fontWeight: 800,
    color: '#1a202c',
    letterSpacing: '-1px',
};

const leadStyle = {
    color: '#374151',
    fontSize: '1.25rem',
    marginBottom: '32px',
};

const listStyle = {
    maxWidth: '480px',
    margin: '0 auto',
    background: 'transparent',
};

const listItemStyle = {
    background: 'rgba(255,255,255,0.85)',
    border: 'none',
    fontSize: '1.08rem',
    padding: '16px 20px',
    marginBottom: '8px',
    borderRadius: '8px',
    color: '#2d3748',
    boxShadow: '0 2px 8px rgba(60, 72, 88, 0.06)',
};

const HeroSection = () => {
    return (
        <div className="container" style={heroSectionStyle}>
            <h1 className="display-4 text-center mb-4" style={headingStyle}>
                Brand Snap – Free Online Image Resizer & Compressor
            </h1>
            <p className="lead text-center" style={leadStyle}>
                Brand Snap is a free and beginner-friendly image tool made for students, bloggers, and digital creators.
                Quickly resize, compress, or transform your images without losing quality — no signup, no watermark, just results.
            </p>
            <ul className="list-group list-group-flush mt-4" style={listStyle}>
                <li className="list-group-item" style={listItemStyle}>📷 Compress and resize images instantly</li>
                <li className="list-group-item" style={listItemStyle}>🎨 Add watermarks and control image quality</li>
                <li className="list-group-item" style={listItemStyle}>🚀 Works on mobile and desktop</li>
                <li className="list-group-item" style={listItemStyle}>🔒 Your images are never stored — private and secure</li>
            </ul>
        </div>
    );
};

export default HeroSection;
