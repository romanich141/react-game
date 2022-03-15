import React, { useReducer } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Context from './context/Context';
import defaultStore from './store/store';
import reducer from './store/reducer';
import Game from './components/pages/Game';
import Welcome from './components/pages/Welcome';
import FinishGame from './components/pages/FinishGame';
import NotFound from './components/pages/NotFound';
import './styles/main.scss';

function App() {
  const [store, dispatch] = useReducer(reducer, defaultStore);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ store, dispatch }}>
      <HashRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish" element={<FinishGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Context.Provider>
  );
}

export default App;
