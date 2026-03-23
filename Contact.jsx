import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <p className="subtitle">
        Interested in collaboration or projects? Feel free to contact me!
      </p>

      {/* TOP INFO CARDS */}
      <div className="contact-cards">

        <div className="info-card">
          <h3>📧 Email</h3>
          <p className="highlight">monisha@email.com</p>
        </div>

        <div className="info-card">
          <h3>📍 Location</h3>
          <p>Bengaluru, India</p>
        </div>

      </div>

      {/* FORM */}
      <div className="contact-form glass">
        <div className="row">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>

        <input type="text" placeholder="Subject" />

        <textarea placeholder="Your Message"></textarea>

        <button className="send-btn">✈ Send Message</button>
      </div>
    </div>
  );
}

export default Contact;