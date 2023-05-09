import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import TestStore from './store/TestStore'

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value = {{
      user: new UserStore(),
      test: new TestStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

