import { useReducer } from "react";
import Context from "./context/Context";
import { defaultStore } from "./store/store";
import { reducer } from "./store/reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game, Welcome, FinishGame, NotFound } from "./components";
import "./styles/main.scss";

const App = () => {
  const [store, dispatch] = useReducer(reducer, defaultStore);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/finish" element={<FinishGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
