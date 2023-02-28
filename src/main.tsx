import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import ScoreProvider from "./context/score";
import SelectedOptionProvider from "./context/selectedOption";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes/Mainroutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ScoreProvider>
        <SelectedOptionProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </SelectedOptionProvider>
      </ScoreProvider>
    </Provider>
  </React.StrictMode>
);
