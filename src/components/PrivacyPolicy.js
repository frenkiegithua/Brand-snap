import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container my-5" style={{
            maxWidth: '700px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
            padding: '2.5rem 2rem'
        }}>
            <h2 style={{
                fontWeight: 700,
                fontSize: '2.2rem',
                marginBottom: '1.5rem',
                color: '#2d3748'
            }}>
                Privacy Policy
            </h2>
            <ul style={{paddingLeft: '1.2em', marginBottom: '1.5rem', color: '#444', fontSize: '1.1rem', lineHeight: 1.7}}>
                <li>
                    We respect your privacy. This app uses Google AdSense to display ads. Google and its partners may collect cookies or device identifiers to personalize ads shown to you.
                </li>
                <li>
                    We do not store personal data or images uploaded by users. Images are processed through Cloudinary and not stored on our servers.
                </li>
                <li>
                    By using this app, you consent to use of such technologies as described.
                </li>
            </ul>
            <p style={{fontSize: '1.05rem', color: '#555'}}>
                For more info, see{' '}
                <a
                    href="https://policies.google.com/technologies/partner-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#3182ce', textDecoration: 'underline'}}
                >
                    How Google uses information from sites or apps
                </a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;