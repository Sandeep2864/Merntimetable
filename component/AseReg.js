/*import React ,{useState} from 'react'

export default function AseReg() {
    const [values,setValues]=useState([]);
  return (
    <div>
      <h1>This is sub ase</h1>
      <select value={values} onChange={(e)=>setValues(e.target.value)}>
        <option value="sec-21">sec-21</option>
        <option value="sec-22">sec-22</option>
        <option value="sec-23">sec-23</option>
        <option value="sec-24">sec-24</option>
        <option value="sec-25">sec-25</option>
              </select>
              <select value={values} onChange={(e)=>setValues(e.target.value)}>
        <option value="sec-21">sec-21</option>
        <option value="sec-22">sec-22</option>
        <option value="sec-23">sec-23</option>
        <option value="sec-24">sec-24</option>
        <option value="sec-25">sec-25</option>
              </select>
              <select value={values} onChange={(e)=>setValues(e.target.value)}>
        <option value="sec-21">sec-21</option>
        <option value="sec-22">sec-22</option>
        <option value="sec-23">sec-23</option>
        <option value="sec-24">sec-24</option>
        <option value="sec-25">sec-25</option>
              </select>
              <select value={values} onChange={(e)=>setValues(e.target.value)}>
        <option value="sec-21">sec-21</option>
        <option value="sec-22">sec-22</option>
        <option value="sec-23">sec-23</option>
        <option value="sec-24">sec-24</option>
        <option value="sec-25">sec-25</option>
              </select>
              <p>{values}</p>
    </div>
  )
}
*/
import React, { useState } from 'react';

export default function AseReg() {
    const [values, setValues] = useState(['', '', '', '']); // Initialize an array with empty strings

    // Handler function to update the selected value at a specific index
    const handleSelectChange = (e, index) => {
        const updatedValues = [...values];
        updatedValues[index] = e.target.value;
        setValues(updatedValues);
    };

    return (
        <div>
            <h1>This is sub ase</h1>
            {Array.from({ length: 4 }, (_, index) => (
                <select key={index} value={values[index]} onChange={(e) => handleSelectChange(e, index)}>
                    <option value="sec-21">sec-21</option>
                    <option value="sec-22">sec-22</option>
                    <option value="sec-23">sec-23</option>
                    <option value="sec-24">sec-24</option>
                    <option value="sec-25">sec-25</option>
                </select>
            ))}
            <p>{values.join(', ')}</p>
        </div>
    );
}