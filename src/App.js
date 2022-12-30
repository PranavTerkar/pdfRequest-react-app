import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allroutes from "./Components/Allroutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;
