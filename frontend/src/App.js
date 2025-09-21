import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResearchPaper from './components/ResearchPaper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResearchPaper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;