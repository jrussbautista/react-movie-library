import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyles from "./utils/globalStyles";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./store";
import Meta from "./components/Shared/Meta";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Meta title="Movie Library | Discover" />
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
