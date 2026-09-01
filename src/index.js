import React from "react";
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

//import { hydrateRoot } from 'react-dom/client';
//import * as serviceWorker from "./serviceWorker";

//const domNode = document.getElementById('root');
//const root = hydrateRoot(domNode, reactNode);

/*
ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
  );
  */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//serviceWorker.unregestered();