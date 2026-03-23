import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "AI Powered Deficiency Detection System Using Nail and Hair Analysis",
      Technologies: "Python, TensorFlow, OpenCV, CNN, NumPy",
      desc: [
        "Developed an AI system to detect nutrient deficiencies using hair and nail images.",
        "Implemented CNN for image classification.",
        "Performed preprocessing using OpenCV (resize, normalization, noise reduction).",
        "Used data augmentation and TensorFlow to improve accuracy."
      ]
    },
    {
      title: "License Plate Detection and Recognition System",
      Technologies: "Python, Machine Learning, OpenCV, TensorFlow",
      desc: [
        "Built system to detect and recognize license plates.",
        "Used OpenCV for preprocessing and plate localization.",
        "Applied ML for character recognition.",
        "Improved accuracy using segmentation techniques."
      ]
    },
    {
      title: "Admission Ticket Generation and Faculty Allocation for Invigilation Duties",
      Technologies: "Python, Pandas, NumPy, Excel/CSV",
      desc: [
        "Developed a system to generate admission tickets and automate faculty allocation.",
        "Used Pandas for efficient data processing.",
        "Generated hall tickets with exam details.",
        "Reduced manual effort using Excel/CSV processing."
      ]
    },
    {
      title: "Criminal Face Detection System",
      Technologies: "Java, OpenCV, Machine Learning",
      desc: [
        "Developed a system to detect and identify criminal faces.",
        "Used OpenCV for face detection.",
        "Compared faces with stored database.",
        "Improved accuracy for reliable identification."
      ]
    }
  ];

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            {/* PROJECT TITLE */}
            <h3>{p.title}</h3>

            {/* BUTTON */}
            <button onClick={() => toggleProject(index)} className="view-btn">
              {openIndex === index ? "Hide Details" : "View More"}
            </button>

            {/* DETAILS */}
            {openIndex === index && (
              <div className="project-details">
                <p className="technologies">
                  <b>Technologies:</b> {p.Technologies}
                </p>

                <ul>
                  {p.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;