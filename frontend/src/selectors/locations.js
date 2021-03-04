import withinProximity from "./promixity_selector";
const proximity_center = { latitude: 39.057, longitude: -94.594 };

export const selectProjectLocations = (locations, { project_types, startDate, endDate, range }) => {

    return locations.filter((location) => {

      //DateRangeSlider value
      const startDateMatch = typeof startDate !== 'number' || location.startDate >= startDate;
      const endDateMatch = typeof endDate !== 'number' || location.endDate <= endDate;
      
      //Project type value
      const locationTypeMatch = !project_types.length || project_types.includes(location.type);
      //Proximity value
      const withinProximityMatch = typeof range !== 'number' || withinProximity(proximity_center, location.center, range);
  
      return startDateMatch && endDateMatch && locationTypeMatch && withinProximityMatch;
    }).sort((a, b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
};