// import ReactDOM from "react-dom/client";
// import App from "./App";
// import './index.css';

// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(<App/>)

import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-fb6661cz1qvs4nv3.us.auth0.com"
    clientId="s1UNIDb79qH6QrTfHwLfghrreOvfKwdA"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
