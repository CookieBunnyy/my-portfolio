// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // if using routing
import App from "./App";
import "./index.css"; // your global styles

// Replace 'your-repo-name' with your GitHub repo name
const basename = "/my-portfolio/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
