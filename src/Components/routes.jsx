import ReactDOM from "react-dom/client";
import React from 'react';
import {   BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from '../App/Main/Main.jsx';
import Profile from '../App/Profile/Profile.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}