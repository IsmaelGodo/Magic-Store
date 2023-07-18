import React from "react";
import { Routes, Route } from 'react-router-dom';

import Dashboard from "./Dashboard/Dashboard";
import Editor from './Editor/Editor';
import Home from './Home/Home';
import Header from "../Header/Header";


const Main = () => {
  
  return <main>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/editor" element={<Editor/>}/>
    </Routes>
  
  </main>;
};

export default Main;
