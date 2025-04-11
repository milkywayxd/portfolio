import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    // Clear previous error message
    setError('');

    // You can handle the form submission by sending the data to your email or backend here
    try {
      const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        throw new Error('There was an issue sending the message');
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <h2 className='form_title'>Contact Me</h2>

      {formSubmitted ? (
        <div className="success-message">
          <p>Thank you for reaching out! I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
