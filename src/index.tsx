// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import rootReducer from './rapper/reducers/rootReducer';
// import{ rapperEnhancer}from'rap/runtime/reduxLib';
// import{ Provider }from 'react-redux';
// //import { rapperEnhancer } from './rapper'
// require('./rapper/customFetch')

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer,
//   composeEnhancers(
//     rapperEnhancer()
//   ))

// ReactDOM.render(
//   <React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>
// </React.StrictMode>,
// document.getElementById('root')
//  //<React.StrictMode>
//     //<Provider store={store}>
//    // <App />
//    // </Provider>
//   //</React.StrictMode>,
//  // document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { compose, createStore } from 'redux';
//import rootReducer from './reducers/rootReducer';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { rapperEnhancer } from './rapper'
require('./rapper/customFetch')

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    rapperEnhancer()
  ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();