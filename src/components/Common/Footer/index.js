import React from 'react';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Added LinkedInIcon
import './styles.css';

const Footer = () => {
    const githubProfileLink = "https://github.com/TejaswiniHirudkar"; // Replace with your GitHub profile URL
    const linkedinProfileLink = "https://www.linkedin.com/in/tejaswini-hirudkar-0a709b20a"; // Replace with your LinkedIn profile URL

    return (
        <div className='footer'>
            <h2 className='logo'>CryptoTracker<span style={{ color: "var(--blue)" }}>.</span></h2>
            <div className='social-media-icons'>
                
                <a href={githubProfileLink} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
                <a href={linkedinProfileLink} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon /> {/* Added LinkedIn icon */}
                </a>
            </div>
            <p className='copyright'>&copy; {new Date().getFullYear()} CryptoTracker. All rights reserved.</p>
        </div>
    );
};

export default Footer;
