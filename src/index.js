import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import App from './components/App';

const client = new ApolloClient();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
