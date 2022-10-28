import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SendBtn from "../../assets/send.svg";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qmtuisq",
      "template_muj9i0s",
      form.current,
      "2q2H2vsi3LcatIdar"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h1 className="section__title">Contact</h1>
      <span className="section__subtitle">Let's build Something</span>

      <div className="contact__container container">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                shahedhossensaad@gmail.com
              </span>
              <a
                className="contact__button"
                href="mailto:shahedhossensaad@gmail.com"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+8801688242754</span>
              <a
                className="contact__button"
                href="https://api.whatsapp.com/send?phone=01688242754&text=Hello"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">shahedhossen.akash</span>
              <a
                className="contact__button"
                href="https://m.me/shahedhossen.akash"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__from-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your Name"
              />
            </div>

            <div className="contact__from-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your Email"
              />
            </div>

            <div className="contact__from-div contact__from-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                row="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button button--flex" type="submit">
              Send Message
              <img src={SendBtn} className="button__icon" alt="send" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
