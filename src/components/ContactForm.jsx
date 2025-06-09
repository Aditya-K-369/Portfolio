import React from "react";


const ContactForm = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/mgvangqk"
        method="POST"
        className="contact-form"
      >
        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Description:
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
