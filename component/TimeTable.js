import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Timetable = () => {
  const [timetable, setTimetable] = useState([
    [{
      subject: "R405A",
      room: "C218"
    }],
    [{
      subject: "22UC3108-5",
      room: "C423"
    }],
    [{
      subject: "22UC3108-S",
      room: "C423"
    }],
    [{
      subject: "22EC2106-5",
      room: "C423"
    }],
    [{
      subject: "22EC2105-S",
      room: "C423"
    }],
  ]);

  const handleTimetableChange = (event, row, column) => {
    const newTimetable = [...timetable];
    newTimetable[row][column].subject = event.target.value;
    setTimetable(newTimetable);
  };

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Subject</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        {timetable.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row[0].day}</td>
            <td>{row[0].time}</td>
            <td>
              <input
                type="text"
                value={row[0].subject}
                onChange={(event) => handleTimetableChange(event, rowIndex, 0)}
              />
            </td>
            <td>
              <input
                type="text"
                value={row[0].room}
                onChange={(event) => handleTimetableChange(event, rowIndex, 1)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Timetable;
