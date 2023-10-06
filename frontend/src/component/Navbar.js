import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
export default function Navbar() {
  return (
    <div className='navbar'>
      <label style={{backgroundColor:'blue',paddingRight:"25px" }}>
        <Link to="/home">Home</Link>
      </label>
      <br />
      <label style={{backgroundColor:'orange',paddingRight:"28px"}}>
        <Link to="/login">Login</Link>
      </label>
      <br />
      <label style={{backgroundColor:'yellow',paddingRight:"30px" }}>
        <Link to="/Math">Math</Link>
      </label>
      <br />
      <label style={{backgroundColor:'red',paddingRight:"42px" }}>
        <Link to="/Top">Top</Link>
      </label>
      <br/>
      <label style={{backgroundColor:'black',paddingRight:"24px"}}>
        <Link to="/Retrivemath">taking math</Link>
      </label>
      <br />
      <label style={{backgroundColor:'grey',paddingRight:"24px"}}>
        <Link to="/SendMath">creater of math</Link>
        </label>
        <br />
        <label style={{backgroundColor:'pink',paddingRight:"24px"}}>
          <Link to="/TimeTable">TimeTable</Link>
        </label>
         <br />
         <label style={{backgroundColor:'lightgreen',paddingRight:"24px"}}>
          <Link to="/FakeTime">FakeTime</Link>
          <br></br>
         </label>
         <label style={{backgroundColor:'lightblue',paddingRight:"24px"}}>
          <Link to="/AseReg">AseReg</Link>
         </label>
    </div> 
  );
}
