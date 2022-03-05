import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8wpbms",
        "template_e53ovls",
        form.current,
        "cCYbNrevKyfsQD6ih"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setName('')
      setEmail('')
      setMessage('')

  };
  return (
    <>
      <div className="contactflex">
        <h1>Contact me</h1>
        <form ref={form} onSubmit={sendEmail} className="contact">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
          />
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <textarea
            name="message"
            cols="30"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="10"
            placeholder="Message"
          ></textarea>
          <div>
            <button type="submit">Get in touch</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
