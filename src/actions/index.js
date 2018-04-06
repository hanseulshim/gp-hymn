import { DATA_AVAILABLE, SELECTED_HYMN } from '../constants';

import data from '../utils/data';

export const getData = () => (dispatch) => {
  dispatch({ type: DATA_AVAILABLE, data });
};

export const selectHymn = hymn => (dispatch) => {
  dispatch({ type: SELECTED_HYMN, data: hymn });
};
