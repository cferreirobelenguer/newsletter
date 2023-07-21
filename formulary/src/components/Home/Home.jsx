import React, { useState } from 'react';
import '../Home/Home.css';

function Home() {
    const [formData, setFormData] = useState('');
    return (
        <div class="home-section">
            <h1>Join our Newsletter!</h1>
            <p>If you're interested in the topics discussed in the article, you're algo going to love our newsletter! Join Now!</p>
            <div className="home-form">
                <form>
                    <input className="home-input"></input>
                    <button className="home-button">Join</button> 
                </form>
                
            </div>
        </div>
        );
    }

export default Home;
