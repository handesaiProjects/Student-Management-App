import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { StudentProvider } from './context/StudentContext';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <div className="App">
        <StudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;