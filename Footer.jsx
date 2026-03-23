import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT - BRAND */}
        <div className="footer-section">
          <h2>Monisha BR</h2>
          <p>
            Java Developer focused on building scalable backend systems and 
            modern web applications with clean and efficient design.
          </p>
        </div>

        {/* CENTER - NAVIGATION */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: monishabr@gmail.com</p>
          <p>Location: Bengaluru, India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Monisha BR. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;