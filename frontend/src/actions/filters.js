// FILTER_BY_RANGE
export const setRangeFilter = (range = null) => ({
    type: 'FILTER_BY_RANGE',
    range: parseInt(range)
});