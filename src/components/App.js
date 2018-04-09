import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import MainContainer from './MainContainer';
import '../styles/App.css';

export default () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);
