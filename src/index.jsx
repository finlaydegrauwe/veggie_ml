import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  document.getElementById("root")
);