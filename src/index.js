import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
