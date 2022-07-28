import React from 'react';
import App from './App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';
//import { setContext } from "@apollo/client/link/context";
//import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://"proxy": "https://morning-island-79260.herokuapp.com":8000' //differs based on if it's production or not
});

const authLink = setContext(() => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('jwtToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
