import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

 import App from './components/app.jsx';


// import reducers from './reducers';

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

ReactDOM.render(<App/>, document.querySelector('.container'));
