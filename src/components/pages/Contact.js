import React from 'react'
import '../../styles/Contact.css'
import emailjs from "emailjs-com"
const  {REACT_APP_Email_KEY,REACT_APP_Template_KEY,REACT_APP_Service_KEY} = process.env


export default function Contact () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(`${REACT_APP_Service_KEY}`, `${REACT_APP_Template_KEY}`, e.target, `${REACT_APP_Email_KEY}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text + {REACT_APP_Service_KEY});
      });
      e.target.reset()
  }

  return (
    <div>

    <div className="contact-main-container">

			<h3 className="title">Get In Touch</h3>

			<form id="contact-form" onSubmit={sendEmail}>


				<label>Name</label>
				<input class="input-field" type="text" name="name"/>

        <label>Email</label>
				<input class="input-field" type="text" name="email"/>

				<label>Subject</label>
				<input class="input-field" type="text" name="subject"/>

				<label>Message</label>
				<textarea class="input-field" name="message"></textarea>

				<input id="submit-btn" type="submit" value="Send" />
			</form>
		</div>
    </div>
  )
}