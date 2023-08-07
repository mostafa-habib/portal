import React from "react";
import "./App.css";
import SignInSide from "./Screens/SignIn";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Screens/HomePage";
import { useSelector } from "react-redux";
import VerticalLinearStepper from "./Screens/ForgetPassword";

function App() {
  const user = useSelector((state) => state.signIn.user);
console.log("vvvvvvvvvvvvvv",user)
  // let userData = null;
  // if(localStorage.getItem('user')) {
  //   userData = localStorage.getItem('user')
  // } else {
  //   if(user)
  //       localStorage.setItem('user',user?.id)
  // }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <SignInSide />} />
      <Route path="/signin" element={<SignInSide />} />
      <Route path="/forget-password" element={<VerticalLinearStepper />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
