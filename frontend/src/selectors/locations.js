import withinProximity from "./promixity_selector";

const selectProjectLocations = (locations, { types, startDate, endDate, range }) => {
    return locations.filter((location) => {

      //DateRangeSlider value
      const startDateMatch = typeof startDate !== 'number' || location.startDate >= startDate;
      const endDateMatch = typeof endDate !== 'number' || location.startDate <= endDate;
      
      //Project type value
      const locationTypeMatch = !types.length || types.includes(location.project_types[0]);

      //Proximity value
      const withinProximityMatch = typeof range !== 'number' || withinProximity(proximity.center, location.center, range);

      console.log(startDateMatch, endDateMatch, locationTypeMatch, withinProximityMatch);
  
      return startDateMatch && endDateMatch && locationTypeMatch && withinProximityMatch;
    }).sort((a, b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
};
  
export default selectProjectLocations;