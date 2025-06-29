import React from 'react';

const contactStyles = {
    container: {
        maxWidth: '500px',
        margin: '60px auto',
        padding: '32px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        fontFamily: 'Segoe UI, Arial, sans-serif',
    },
    heading: {
        fontSize: '2.2rem',
        fontWeight: 700,
        color: '#2d3748',
        marginBottom: '18px',
        letterSpacing: '-1px',
    },
    paragraph: {
        fontSize: '1.1rem',
        color: '#4a5568',
        marginBottom: '18px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        marginBottom: '12px',
        fontSize: '1rem',
        color: '#2d3748',
    },
    link: {
        color: '#3182ce',
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'color 0.2s',
    },
};

const Contact = () => (
    <div style={contactStyles.container}>
        <h2 style={contactStyles.heading}>Contact Us</h2>
        <p style={contactStyles.paragraph}>
            If you have questions or feedback, feel free to reach out:
        </p>
        <ul style={contactStyles.list}>
            <li style={contactStyles.listItem}>
                Email:{' '}
                <a
                    href="mailto:frenkiewizard@gmail.com"
                    style={contactStyles.link}
                >
                    frenkiewizard@gmail.com
                </a>
            </li>
            <li style={contactStyles.listItem}>
                Twitter:{' '}
                <a
                    href="https://twitter.com/FrenkieWiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={contactStyles.link}
                >
                    @FrenkieWiz
                </a>
            </li>
        </ul>
    </div>
);

export default Contact;