import uuid from 'uuid';

// ADD_PROJECTS
export const addProjects = (projects) => ({
  type: 'ADD_PROJECTS',
  projects: projects.map(project => {
      return {
        key: uuid(),
        description: project.description,
        ggeReduced: project.ggeReduced,
        ghgReduced: project.ghgReduced,
        project_id: project.id,
        name: project.name,
        img: project.photoUrl,
        url: project.websiteUrl,
        year: project.year
      }
  })
});