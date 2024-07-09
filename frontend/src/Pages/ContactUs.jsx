import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <section id="contact">
        <p>Get In Touch</p>
        <h1>Contact Me</h1>


        <div class="for-contact">
           {/* <!-- <img class="email-icon" src="./assets/email.png" alt="email-icon" onclick="location.href='https://mail.google.com'"><h3>kumargulshan955@gmail.com</h3></img> --> */}
           {/* <img class="email-icon" src="./assets/email.png" alt="email-icon" onclick="location.href='mailto:kumargulshan955@gmail.com'"></img> */}
           <a href="mailto:kumargulshan955@gmail.com">kumargulshan955@gmail.com</a>
           {/* <img class="linkdin-icon" src="./assets/linkedin.png" alt="linkdin-icon" onclick="location.href='https://www.linkedin.com/in/gulshan-kumar-6a1955182/'"> */}
           <a href="https://www.linkedin.com/in/gulshan-kumar-6a1955182/">Linkdin</a>
        </div>
        </section>
    </div>
  );
};

export default ContactUs;