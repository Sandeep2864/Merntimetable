import React, { useState } from 'react';
import axios from 'axios';

export default function SendMath() { // Rename to start with an uppercase letter, e.g., SendMath
  const [id, setId] = useState('');
  const [maths1, setMaths1] = useState('');
  const [maths2, setMaths2] = useState('');
  const [maths3, setMaths3] = useState('');

  const entered = () => {
    const sendto = {
      id,
      maths1,
      maths2,
      maths3,
    };
    axios.post('http://localhost:8000/math', sendto)
      .then((response) => {
        console.log('Data entered successfully', response.data);
      })
      .catch((err) => {
        console.error('Error', err);
      });
  };

  return (
    <div>
      <h1>What are you even thinking? Please enter the details.</h1>
      <label>ID: </label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br/>
      <label>Maths1: </label>
      <input type="text" value={maths1} onChange={(e) => setMaths1(e.target.value)} />
      <br/>
      <label>Maths2: </label>
      <input type="text" value={maths2} onChange={(e) => setMaths2(e.target.value)} />
      <br />
      <label>Maths3: </label>
      <input type="text" value={maths3} onChange={(e) => setMaths3(e.target.value)} />
      <br />
      <button type="button" onClick={entered}>Submit</button>
    </div>
  );
}
