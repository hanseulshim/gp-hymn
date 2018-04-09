import { DATA_AVAILABLE, SELECTED_HYMN, RESET_HYMN } from '../constants/';

export const dataReducer = (state = { data: [], loading: true }, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { data: action.data, loading: false };
    default:
      return state;
  }
};

export const hymnReducer = (state = { title: '', lyrics: '' }, action) => {
  switch (action.type) {
    case SELECTED_HYMN:
      return { title: action.data.title, lyrics: action.data.lyrics };
    case RESET_HYMN:
      return { title: '', lyrics: '' };
    default:
      return state;
  }
};
