function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.name}</h3>
      <p>{project.type}</p>
    </div>
  );
}
export default ProjectCard;