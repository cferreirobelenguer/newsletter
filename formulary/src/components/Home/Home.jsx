import React, { useState } from 'react';
import '../Home/Home.css';
import Modal from '../Modal/Modal';

function Home() {
    const [formData, setFormData] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    //data form
    const handleChange = (event) => {
        setFormData(event.target.value)
    }
    //modal functions
    //modal is open
    const handleModalOpen = () => {
        if(formData) {
            if (formData.includes('@')) {
                fetch('http://localhost:3500/send-email/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: formData }),
                })
                .then((response) => {
                    console.log(response)
                    return response.json();
                })
                .then((responseData) => {
                    console.log('server response:', responseData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                setIsModalOpen(true)
            } else {
                console.log('el dato no es válido')
            }
            
        }
    };
    //modal is close
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="home-section">
            <h1>Join our Newsletter!</h1>
            <p>If you're interested in the topics discussed in the article, you're algo going to love our newsletter! Join Now!</p>
            <div className="home-form">
                <input type="text" className="home-input" value={formData} name="email" onChange={(event) => handleChange(event)}/>
                <button className="home-button" onClick={handleModalOpen}>Join </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <h2>Thanks for Joining!</h2>
                <p>You've successfully subscribed to our newsletter</p>
            </Modal>
        </div>
        
        );
    }

export default Home;
