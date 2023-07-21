import React from 'react';
import '../Footer/Footer.css';

function Footer() {
    return (
        <div className="footer-section">
            <p className="footer-text">Follow us in</p>
            <div className="footer-social">
                    <a href="https://m.facebook.com/people/Startkidsup/100078658669513/"><img src="https://i.ibb.co/tQRKqfB/facebook.png" alt="facebook" className="footer-socialmedia"/></a>
                    <a href="https://www.instagram.com/startkidsup_/"><img src="https://i.ibb.co/FBWsq95/instagram.png" alt="instagram" className="footer-socialmedia"/></a>
                    <a href="https://www.youtube.com/@startkidsup6904"><img src="https://i.ibb.co/YkbTPHh/youtube.png" alt="youtube" className="footer-socialmedia"/></a>
            </div>
            <p className="footer-copy">@startkidsup_</p>
        </div>
        );
    };

export default Footer;
