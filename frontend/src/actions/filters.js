// FILTER_BY_RANGE
export const setRangeFilter = (range = 25) => ({
    type: 'FILTER_BY_RANGE',
    range: parseInt(range)
});

// ADD_TYPE_FILTER
// REMOVE_TYPE_FILTER
export const setTypeFilter = (project_type = null) => ({
    type: project_type ? 'ADD_TYPE_FILTER' : 'REMOVE_TYPE_FILTER',
    project_type: project_type
});