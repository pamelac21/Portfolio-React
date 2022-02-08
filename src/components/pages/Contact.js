import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Invalid email address');
            } else {
                setErrorMessage('');
            }
        }

        else{
            if(!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required`)
            }
        }

        setFormState({ ...formState, [e.target.name]: e.target.value })
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 className="contact-title">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" name="name" className="form-control" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input type="email" name="email" className="form-control" defaultValue={email} onBlur={handleChange} />
                </div>
              
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea name="message" className="form-control" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="btn">Submit</button>
            </form>
        </section>
        
       
    )
}

export default ContactForm;