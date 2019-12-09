const projectsReducerDefaultState = [];
  
export default (state = projectsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PROJECTS':
            return [
                ...state,
                action.projects
            ];
        default:
            return state;
    }
};