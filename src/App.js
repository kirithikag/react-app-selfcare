import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HabitTracker from './components/HabitTracker';
import Reminders from './components/Reminders';
import Progress from './components/Progress';

function App() {
  const [habits, setHabits] = useState([
    { name: 'Meditation', completed: false, category: 'Mental' },
    { name: 'Running', completed: false, category: 'Physical' },
  ]);

  const [reminders, setReminders] = useState([
    { time: '08:00 AM', task: 'Morning Yoga' },
    { time: '10:00 AM', task: 'Drink Water' },
  ]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/habit-tracker" 
            element={<HabitTracker habits={habits} setHabits={setHabits} />} 
          />
          <Route 
            path="/reminders" 
            element={<Reminders reminders={reminders} setReminders={setReminders} />} 
          />
          <Route 
            path="/progress" 
            element={<Progress habits={habits} reminders={reminders} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
