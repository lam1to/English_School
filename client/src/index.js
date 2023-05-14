import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import TestStore from './store/TestStore'
import VocabularyStore from './store/VocabularyStore';
import GrammarStore from './store/GrammarStore';

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value = {{
      user: new UserStore(),
      test: new TestStore(),
      vocabulary: new VocabularyStore(),
      grammar: new GrammarStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

