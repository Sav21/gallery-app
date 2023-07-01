import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserProvider from "./storage/UserProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
