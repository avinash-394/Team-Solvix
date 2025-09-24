import React from 'react';

// Import the component-specific CSS
import './ProjectsList.css';

const ProjectsList = () => {
  const ongoingProjects = ["UdaanAI", "AI Roommate matching App", "VacciTrack"];
  const upcomingProjects = ["Eye tracking wheelchair", "Women healthcare", "MediVahak"];

  return (
    <div className="info-card projects-list">
      <h4>Ongoing Projects</h4>
      <ul>
        {ongoingProjects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <hr className="projects-divider" />
      <h4>Upcoming Projects</h4>
      <ul>
        {upcomingProjects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;