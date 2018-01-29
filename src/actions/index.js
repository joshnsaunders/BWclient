import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_SEARCH } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const submitSearch = (values) => async dispatch => {
  const res = await axios.post('/api/search', values)

  // history.push('/search')
  dispatch({ type:FETCH_SEARCH, payload:res.data})
}

export const fetchSearch = () => async dispatch => {
  const res = await axios.get('/api/search');

  dispatch({ type:FETCH_SEARCH, payload: res.data})
}
