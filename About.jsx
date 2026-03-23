import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p className="about-sub">
        Passionate Java and Web Developer, continuous learner, and creator of modern, user-friendly applications 🚀
      </p>

      <div className="about-cards">

        {/* BIO */}
        <div className="card">
          <h2>👩‍💻 Bio</h2>
          <p>
           I am a Java and Web Developer passionate about building responsive applications with clean UI and strong backend functionality.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="card">
          <h2>🎓 Education</h2>
          <p>
            B.E in Computer Science Engineering,<br />
            Nagarjuna College of Engineering and Technology, Bengaluru
          </p>
        </div>

        {/* SKILLS */}
        <div className="card">
          <h2>⚡ Skills</h2>
          <p>
            Java, HTML, CSS, JavaScript, MySQL, React, git </p>
        </div>

      </div>
    </div>
  );
}

export default About;