import React, { createContext, useReducer, useEffect } from 'react';
import studentReducer from '../utils/studentReducer';

export const StudentContext = createContext();

const initialState = {
  students: JSON.parse(localStorage.getItem('students')) || [],
};

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(state.students));
  }, [state.students]);

  const addStudent = (student) => {
    dispatch({ type: 'ADD_STUDENT', payload: student });
  };

  const deleteStudent = (id) => {
    if (window.confirm(`Are you sure you want to delete ${state.students.find((s) => s.id === id).name}?`)) {
      dispatch({ type: 'DELETE_STUDENT', payload: id });
    }
  };

  return (
    <StudentContext.Provider value={{ students: state.students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};