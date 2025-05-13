import React from "react";
import '../contact/contact.css';

export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p><strong>LAW OFFICE</strong></p>
          <p><strong>LAGOS</strong></p>
          <p>
            1st Chancery House, No 5,<br />
            C & I Leasing Drive,<br />
            Lekki Phase 1, (In care of Hill & Springs)<br />
            Lagos.
          </p>
          <p><strong>TELL</strong></p>
          <p>+2348137997815, +2348154517333</p>
          <p><strong>EMAIL</strong></p>
          <p>
            ogundelea076@gmail.com<br />
            mantraattorneys@gmail.com
          </p>
        </div>

        <div className="contact-form">
          <h2>Message Us</h2>
          <form>
            <input type="text" placeholder="Enter your name" name="name" required />
            <input type="email" placeholder="Enter your email" name="email" required />
            <input type="tel" placeholder="Enter your number" name="phone" required />
            <textarea placeholder="Leave your message here" name="message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
