import React, { useState } from 'react';
import axios from 'axios';
export default function Home() {
  // State variables to store selected section and entered subsection
  const [selectedSection, setSelectedSection] = useState("");
  const [enteredSubsection, setEnteredSubsection] = useState("");
  const [mathslecture,setMathslecture]=useState("");
  const [mathstutorial,setMathstutorial]=useState("");
  const [mathspratical,setMathspratical]=useState("");
  const mathst=mathslecture+" "+mathstutorial;
  const mathsp=mathslecture+" "+mathspratical;

  
  // Function to handle form submission
  const handleSubmit = () => {

    const sendto =  {
      mathslecture,
      mathst,
      mathsp,
    };
    axios.post('http://localhost:8000/math/user',sendto)
    .then(Response => {
      console.log('data entered successfully',Response.data);
    })
    .catch(err => {
      console.error("error",err);
    });
    // Example: You can make an API call to store the data in your database
  };

  return (
    <>
      
      <div>
      <table style={{ marginTop: '60px', marginLeft: '160px' }}>
  <thead>
    <tr>
      <th style={{ padding: '10px', borderBottom: '2px solid black' ,borderRight: '2px solid black'}}>
        <h1>sub</h1>
      </th>
      <th style={{ padding: '10px', borderBottom: '2px solid black' }}>
        <h1>L</h1>(lecture)
      </th>
      <th style={{ padding: '10px', borderBottom: '2px solid black' }}>
        <h1>T</h1>(Tutorial)
      </th>
      <th style={{ padding: '10px', borderBottom: '2px solid black' }}>
        <h1>P</h1>(Practical)
      </th>
      <th style={{ padding: '10px', borderBottom: '2px solid black' }}>
        <h1>S</h1>(Skill)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: '10px',borderRight: '2px solid black'  }}>
        maths</td>
      <td style={{ padding: '10px' }}>
        <select value={mathslecture} onChange={(e) => setMathslecture(e.target.value)} style={{ width: '100%' }}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={mathstutorial} onChange={(e) => setMathstutorial(e.target.value)}>
        <option value="A">{mathslecture}A</option>
        <option value="B">{mathslecture}B</option>
        <option value="C">{mathslecture}C</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={mathspratical} onChange={(e) => setMathspratical(e.target.value)}>
        <option value="A">{mathslecture}A</option>
        <option value="B">{mathslecture}B</option>
        <option value="C">{mathslecture}C</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
        <option value="{mathslecture}A">{mathslecture}A</option>
        <option value="{mathslecture}B">{mathslecture}B</option>
        <option value="{mathslecture}C">{mathslecture}C</option>
        </select>
        </td>
          </tr>
          <tr>
            <td style={{ padding: '10px',borderRight: '2px solid black'}}>
              physics
            </td>
            <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
          </tr>
          <tr>
            <td style={{ padding: '10px',borderRight: '2px solid black' }}>
              chemistry
            </td>
            <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
          </tr>
          <tr>
            <td style={{ padding: '10px',borderRight: '2px solid black' }}>
              biology
            </td>
            <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td >
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
          </tr>
          <tr>
            <td style={{ padding: '10px',borderRight: '2px solid black' }}>
              java
            </td>
            <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
          </tr>
          <tr>
            <td style={{ padding: '10px',borderRight: '2px solid black' }}>
              python
            </td>
            <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
        <td style={{ padding: '10px' }}>
        <select id="section" name="section" value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="sec-21">Sec-21</option>
          <option value="sec-22">Sec-22</option>
          <option value="sec-23">Sec-23</option>
          <option value="sec-24">Sec-24</option>
          <option value="sec-25">Sec-25</option>
          <option value="sec-26">Sec-26</option>
          <option value="sec-27">Sec-27</option>
          <option value="sec-28">Sec-28</option>
          <option value="sec-29">Sec-29</option>
          <option value="sec-30">Sec-30</option>
        </select>
        </td>
          </tr>
          </tbody>
        </table>
        {/* Dropdown and input for section and subsection */}
       
       

        <br />

        <label htmlFor="subsection">Enter a subsection (e.g., LTPS):</label>
        <input
          type="text"
          id="subsection"
          name="subsection"
          placeholder="Enter subsection"
          value={enteredSubsection}
          onChange={(e) => setEnteredSubsection(e.target.value)}
        />

        <br />

        <button onClick={handleSubmit}>Submit</button>
        <p>{mathslecture}</p>
        <p>{mathslecture+" " +mathstutorial}</p>
        <p>{mathslecture+" "+mathspratical}</p>

      </div>
    </>
  );
}
