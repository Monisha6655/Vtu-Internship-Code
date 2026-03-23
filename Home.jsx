import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* LEFT CONTENT */}
      <div className="home-left">
        <span className="badge"> Java Developer</span>

        <h1>
          Monisha BR
        </h1>

        <p>
          I build modern, responsive, and user-friendly web applications using Java and frontend technologies.
          Passionate about creating efficient backend systems and delivering smooth user experiences.
        </p>

        <div className="buttons">
          <button
            className="btn primary"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </button>

          <button
            className="btn outline"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>

          {/* ✅ DOWNLOAD RESUME BUTTON */}
          <a href="/Monisha-BR-resume.Javaa.pdf" download>
            <button className="btn resume">
              Download Resume ⬇️
            </button>
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="home-right">
        <img
          src="monisha.jpeg"
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Home;