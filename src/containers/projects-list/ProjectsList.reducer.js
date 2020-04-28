import {
  GET_ALL_PROJECTS,
  GET_ORDERED_PROJECTS,
  GET_PROJECTS_ERROR,
} from './ProjectsList.actions';

const initialProjectState = {
  projects: [],
  loading: true,
  show: false,
};

/**
 * The projects reducer.
 */
const projectsReducer = (state = initialProjectState, { payload, type }) => {
  switch (type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        projects: payload.projects,
        loading: false,
        error: false,
      };
    case GET_ORDERED_PROJECTS:
      return {
        ...state,
        projects: payload.projects,
        loading: payload.loading,
        error: false,
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: payload.loading,
      };
    default: {
      return state;
    }
  }
};

export default projectsReducer;