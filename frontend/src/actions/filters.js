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

// SET_ZIPCODE
export const setZipCode = (zipcode) => ({
    type: 'SET_ZIPCODE',
    zipcode: parseInt(zipcode)
});

// FILTER_BY_START_DATE
export const setStartDate = (start_date) => ({
    type: 'FILTER_BY_START_DATE',
    start_date,
});

// FILTER_BY_END_DATE
export const setEndDate = (end_date) => ({
    type: 'FILTER_BY_END_DATE',
    end_date,
});