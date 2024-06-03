import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  const { students, deleteStudent } = useContext(StudentContext);

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.score}
              <button onClick={() => deleteStudent(student.id)}>X</button>
            </li>
          ))
        ) : (
          <li>No students available</li>
        )}
      </ul>
    </div>
  );
};

export default StudentList;