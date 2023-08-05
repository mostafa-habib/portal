import React from "react";
import "./App.css";
import SignInSide from "./Screens/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Screens/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/signin" element={<SignInSide />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
