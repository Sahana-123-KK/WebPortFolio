import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4kkzr1c",
        "template_a859br3",
        formRef.current,
        "76OKK347bzNxQ6wIV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          //   alert
        },
        (error) => {
          console.log(error.text);
          alert("Couldn't Send");
        }
      );
  };
  return (
    <div className="con">
      <div className="sty"></div>
      <div className="con-left">
        <h1 className="conheadleft">Let's Discuss your Project</h1>
        <div className="detailscon">
          <i className="bi bi-telephone-outbound"></i>
          <p>
            {" "}
            <a href="tel:+916383526812">6383526812</a>{" "}
          </p>
        </div>
        <div className="detailscon">
          <i className="bi bi-envelope"></i>
          <p>
            {" "}
            <a target="_blank" href="mailto: saisahanaece2019@gmail.com">
              saisahanaece2019@gmail.com
            </a>{" "}
          </p>
        </div>
        <div className="detailscon">
          <i className="bi bi-geo-alt"></i>{" "}
          <p>Kolatur, Chennai - 600099,TamilNadu, India</p>
        </div>
      </div>
      <div className="con-right">
        <div className="top">
          <span className="status">What's your story?</span>
          <span className="con-desc">
            Get in Touch, Always available for freelancing, if the right
            projects come along me.
          </span>
        </div>

        <div className="formscontact">
          <form className="formclass" onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="user_name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="subject"
                name="user_subject"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                required
                name="user_email"
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label"></label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btnown">
              Submit
            </button>
            <p className="returnmessage">
              {done && "Thank You,Will Contact Soon..."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
