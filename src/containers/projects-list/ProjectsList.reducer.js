import {
  GET_PROJECTS,
  GET_PROJECTS_ERROR,
  GET_MORE_PROJECTS,
  ADD_PROJECT_TO_LIST,
} from './ProjectsList.actions';

const sortFilters = [
  { id: 'created_at_desc', value: 'created_at_desc', label: 'Creadas desc' },
  { id: 'created_at_asc', value: 'created_at_asc', label: 'Creadas asc' },
  { id: 'updated_at_asc', value: 'updated_at_asc', label: 'Actualizado asc' },
  { id: 'updated_at_desc', value: 'updated_at_desc', label: 'Actualizado desc' },
  { id: 'name_asc', value: 'name_asc', label: 'Nombre asc' },
  { id: 'name_desc', value: 'name_desc', label: 'Nombre desc' },
  { id: 'delivery_date_asc', value: 'delivery_date_asc', label: 'Fecha entrega asc' },
  { id: 'delivery_date_desc', value: 'delivery_date_desc', label: 'Fecha entrega desc' },
];


const initialProjectState = {
  projects: [],
  loading: true,
  show: false,
  sortFilters,
  params: {
    keyword: '',
    page: 0,
    limit: 6,
    sort: sortFilters[0],
  },
};

/**
 * The projects reducer.
 */
const projectsReducer = (state = initialProjectState, { payload, type }) => {
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload?.projects?.list || [],
        total: payload?.projects?.total || 0,
        params: payload?.params,
        loading: false,
        error: undefined,
      };
    case GET_MORE_PROJECTS:
      const newProjects = payload?.projects?.list || [];
      return {
        ...state,
        projects: [...state.projects, ...newProjects],
        total: payload?.projects?.total || 0,
        loading: false,
        error: undefined,
        params: payload?.params,
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    case ADD_PROJECT_TO_LIST: 
      return {
        ...state,
        projects: state.projects.unshift(payload.project),
      }
    default: {
      return state;
    }
  }
};

export default projectsReducer;
