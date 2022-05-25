import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./redux/reducers";
import { ToastContainer, toast } from "react-toastify";
import "./i18next";
import { Grid, CircularProgress } from "@mui/material";

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Suspense
    fallback={
      <Grid container spacing={2} justifyContent="center" marginTop={4}>
        <CircularProgress />
      </Grid>
    }
  >
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
      <ToastContainer />
    </Provider>
  </Suspense>,

  document.getElementById("root")
);
