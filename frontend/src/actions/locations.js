import uuid from 'uuid';

// ADD_LOCATIONS
export const addLocations = (locations) => ({
  type: 'ADD_LOCATIONS',
  locations: locations.map(location => {
      return {
        key: uuid(),
        project_id: location.project_ids[0],
        name: location.project_name,
        type: location.project_types[0],
        center: location.center,
        gge_reduced: location.gge_reduced,
        ghg_reduced: location.ghg_reduced
      }
  })
});