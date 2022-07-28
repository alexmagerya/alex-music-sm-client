//import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ApolloProvider from './ApolloProvider'

//const root = ReactDOM.createRoot(ApolloProvider, document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

ReactDOM.render(ApolloProvider, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
