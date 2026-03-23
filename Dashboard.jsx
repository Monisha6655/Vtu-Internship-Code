import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Dashboard.css";

function Dashboard() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dashboard">

      {/* HEADER */}
      <h1>Dashboard</h1>

      {/* THEME BUTTON */}
      <button className="theme-btn" onClick={toggleTheme}>
        🌙 Toggle Theme
      </button>

      {/* STATS CARDS */}
      <div className="stats">

        <div className="stat-card">
          <h2>📂 Projects</h2>
          <p>4 Completed</p>
        </div>

        <div className="stat-card">
          <h2>⚡ Skills</h2>
          <p>5 Technologies</p>
        </div>

        <div className="stat-card">
          <h2>📧 Messages</h2>
          <p>12 Received</p>
        </div>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="activity glass">
        <h2>Recent Activity</h2>

        <ul>
          <li>✅ Successfully completed an AI-based project</li>
          <li>📌Enhanced portfolio with modern UI/UX design</li>
          <li>🚀Gained knowledge in advanced React concepts</li>
          <li>📩Received an internship opportunity</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;