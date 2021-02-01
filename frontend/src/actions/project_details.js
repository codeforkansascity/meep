import {v4 as uuid} from 'uuid';

// SELECT_PROJECT
export const selectProject = (selected_project) => ({
  type: 'SELECT_PROJECT',
  project: {
    key: uuid(),
    date: selected_project.date,
    img: selected_project.img,
    details: selected_project.details,
    name: selected_project.project_name,
    type: selected_project.project_type,
    emissions_data: selected_project.emissions_data,
  }
});
