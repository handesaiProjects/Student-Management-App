import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: '',
    score: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.score) {
      const newStudent = {
        ...formData,
        score: parseInt(formData.score),
        id: Date.now(),
      };
      addStudent(newStudent);
      setFormData({
        name: '',
        score: '',
      });
    }
  };

  return (
    <div className="student-form">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Score:</label>
          <input
            type="number"
            name="score"
            value={formData.score}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;