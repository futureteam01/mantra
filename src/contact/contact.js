import React from "react";
import '../contact/contact.css';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {

  const [state, handleSubmit] = useForm("xanozpoo");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
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
          <p>2348137997815, 2348154517333</p>
          <p><strong>EMAIL</strong></p>
          <p>
            ogundelea076@gmail.com<br />
            mantraattorneys@gmail.com
          </p>
        </div>

        <div className="contact-form">
          <h2>Message Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your number"
                required
              />

              <textarea
                id="message"
                name="message"
                placeholder="Leave your message here"
                rows="5"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>

        </div>
      </div>
    </div>
  );
}
