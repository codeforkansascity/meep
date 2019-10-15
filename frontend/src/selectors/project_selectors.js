import withinProximity from "./promixity_selector";

const selectProjects = (projects, { project_types, startDate, endDate, proximity }) => {
    return projects.filter((project) => {

      //DateRangeSlider value
      const startDateMatch = typeof startDate !== 'number' || project.startDate >= startDate;
      const endDateMatch = typeof endDate !== 'number' || project.startDate <= endDate;
      
      //Project type value
      const projectTypeMatch = !Array.isArray(project_types) || project_types.includes(project.project_type);

      //Proximity value
      const withinProximityMatch = withinProximity(proximity.center, project.center, proximity.range);
  
      return startDateMatch && endDateMatch && projectTypeMatch && withinProximityMatch;
    }).sort((a, b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
};
  
export default selectProjects;