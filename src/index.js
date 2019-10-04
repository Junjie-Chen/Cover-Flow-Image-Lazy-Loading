import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './components/App';
import imageData from './data/images';
import query from './query/images';

const client = new ApolloClient({
  clientState: {
    defaults: imageData,
    resolvers: {
      Query: {
        images(data, variables, { cache }) {
          const { images } = cache.readQuery({ query });

          return images;
        }
      }
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
