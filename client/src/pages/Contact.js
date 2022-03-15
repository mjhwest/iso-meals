import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import $ from "jquery";
import "./contact.css";


//using emailJS to get email data . 

function Contact() {
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_7jMNvvhPWGkfkzQVBbCdT";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        console.log(result.text);
        $("#success-modal").show();
        $("#close-modal").on("click", function () {
          $("#name").val("");
          $("#phone").val("");
          $("#email").val("");
          $("#description").val("");
          $("#subject").val("");
          $("#success-modal").hide();
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1> contact Iso Meals </h1>
        <p> Need to contact Iso-Meals? Email us now and one of our team members will contact you.  </p>
      </div>

      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Please enter your name"
                  name="name"
                />
                <div className="line"> </div>
              </div>
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Please enter your email"
                  name="email"
                />
                <div className="line"> </div>
              </div>
              <div className="text-center">
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Please enter your best contact number"
                  name="phone"
                />
                <div className="line"> </div>
              </div>
              <div className="text-center">
                <input
                  type="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Please enter the subject title"
                  name="subject"
                />
                <div className="line"> </div>
              </div>
            </div>
            {/* main description */}
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  placeholder="What would you like to talk about?"
                  name="description"
                ></textarea>
                <div className="line"> </div>
              </div>
              <input
                type="submit"
                className="btn-main-offer contact-btn"
                value="Send"
              />
            </div>
          </div>
        </form>
      </div>
      {/* modal to show the email has successfully been sent  */}
      <div id="success-modal" className="custom-modal">
        <h1 className="success-heading pb-3">Thanks for your message!</h1>
        <p className="success-text pb-3">
          One of our team members will be in contact with you soon. 
        </p>
        <button id="close-modal" className="btn btn-success px-5">
          Ok
        </button>
      </div>
    </div>
  );
}

export default Contact;
