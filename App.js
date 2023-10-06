import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Math from './component/Math';
import Home from './component/Home';
import Top from './component/Top';
import Login from './component/Login';
import SendMath from './component/SendMath';
import Retrivemath from './component/RetriveMaths';
import TimeTable from './component/TimeTable';
import FakeTime from './component/FakeTime';
import AseReg from './component/AseReg';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import './App.css';
export default function App() {
  return (
    <BrowserRouter>
      <div className="page-content">
      <Navbar />
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/>          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/Math" element={<Math />} />
          <Route path="/Top" element={<Top />} />
          <Route path="/Retrivemath" element={<Retrivemath />} />
          <Route path="/SendMath" element={<SendMath />} />
          <Route path="/TimeTable" element={<TimeTable />} />
          <Route path="/FakeTime" element={<FakeTime />} />
          <Route path="/AseReg" element={<AseReg />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
