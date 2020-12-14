export const selectProjectsByFilter = (projects, { types, startDate, endDate, range, zipcode }) => {
    return projects.filter(project => {

        // DateRangeSlider values: startDate and endDate
        const startDateMatch = project.year >= startDate;
        const endDateMatch = project.year <= endDate;
        return startDateMatch && endDateMatch;
    }).sort((a,b) => {
        return a.startDate < b.startDate ? 1 : -1;
    });
}