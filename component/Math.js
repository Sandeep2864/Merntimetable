import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Math() {
  const [selectedSection, setSelectedSection] = useState("");
  const [mathslecture, setMathslecture] = useState("");
  const [mathstutorial, setMathstutorial] = useState("");
  const [mathspratical, setMathspratical] = useState("");
  const [sectionCounts, setSectionCounts] = useState({}); // To keep track of section counts

  // Fetch initial section counts from your API or database
  useEffect(() => {
    // Replace with your API endpoint to fetch section counts
    axios.get('http://localhost:8000/section-counts')
      .then((response) => {
        setSectionCounts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching section counts", error);
      });
  }, []);

  // Function to handle form submission
  const handleSubmit = () => {
    const sendto = {
      mathslecture,
      section: selectedSection, // Include the selected section in the request
    };
    axios.post('http://localhost:8000/math', sendto)
      .then((Response) => {
        console.log('data entered successfully', Response.data);
        // Update section counts after a successful registration
        setSectionCounts((prevCounts) => ({
          ...prevCounts,
          [selectedSection]: (prevCounts[selectedSection] || 0) + 1,
        }));
      })
      .catch((err) => {
        console.error("error", err);
      });
  };

  // Function to check if a section is at capacity (e.g., 4 students)
  const isSectionAtCapacity = (section) => {
    const capacity = 4; // You can change this to your desired capacity
    return (sectionCounts[section] || 0) >= capacity;
  };

  // Function to generate options for sections with extra space at the top
  const generateSectionOptions = () => {
    const sections = ['A', 'B', 'C']; // Customize this as needed
    const options = [<option key="" value="">Select</option>]; // Add an empty option at the top

    sections.forEach((section) => {
      options.push(
        <option key={section} value={`${mathslecture}${section}`}>
          {`${mathslecture} ${section}`}
        </option>
      );
    });

    return options;
  };

  return (
    <>
      <div>
        {/* ... Rest of your component */}
        <td style={{ padding: '10px' }}>
          <select value={mathslecture} onChange={(e) => setMathslecture(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select</option>
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
            {generateSectionOptions()}
          </select>
        </td>
        <td style={{ padding: '10px' }}>
          <select id="section" name="section" value={mathspratical} onChange={(e) => setMathspratical(e.target.value)}>
            {generateSectionOptions()}
          </select>
        </td>
        <td style={{ padding: '10px' }}>
          <select
            id="section"
            name="section"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            disabled={isSectionAtCapacity(selectedSection)}
          >
            {generateSectionOptions()}
          </select>
          <button type="button" onClick={handleSubmit}>submit</button>
        </td>
        {/* ... Rest of your component */}
      </div>
    </>
  );
}
