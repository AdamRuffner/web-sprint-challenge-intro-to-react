import React from 'react';
import { render } from 'react-dom';
import {ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const BASE_URL = 'https://swapi.dev/api/'


ReactDOM.render(<App />, document.getElementById('root'));
