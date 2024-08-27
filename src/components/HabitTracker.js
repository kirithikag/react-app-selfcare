import React, { useState } from 'react';
import './HabitTracker.css'; // Import the CSS

function HabitTracker() {
  const [habits, setHabits] = useState([
    { name: 'Meditation', completed: false, category: 'Mental' },
    { name: 'Running', completed: false, category: 'Physical' },
  ]);
  const [newHabit, setNewHabit] = useState({ name: '', category: 'General' });

  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  const addHabit = () => {
    if (newHabit.name.trim()) {
      setHabits([...habits, { ...newHabit, completed: false }]);
      setNewHabit({ name: '', category: 'General' });
    }
  };

  const deleteHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
  };

  const editHabit = (index, newName) => {
    const newHabits = [...habits];
    newHabits[index].name = newName;
    setHabits(newHabits);
  };

  return (
    <div className="habit-tracker-container">
      <h2 className="habit-tracker-header">Habit Tracker</h2>
      <ul className="habit-list">
        {habits.map((habit, index) => (
          <li key={index} className="habit-item">
            <span
              style={{
                textDecoration: habit.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {habit.name} ({habit.category})
            </span>
            <button
              onClick={() => toggleHabit(index)}
              className="complete-button"
            >
              {habit.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => deleteHabit(index)}
              className="delete-button"
            >
              Delete
            </button>
            <input
              type="text"
              value={habit.name}
              onChange={(e) => editHabit(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <div className="new-habit-section">
        <input
          type="text"
          placeholder="New Habit"
          value={newHabit.name}
          onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
        />
        <select
          value={newHabit.category}
          onChange={(e) => setNewHabit({ ...newHabit, category: e.target.value })}
        >
          <option value="General">General</option>
          <option value="Physical">Physical</option>
          <option value="Mental">Mental</option>
          <option value="Emotional">Emotional</option>
        </select>
        <button onClick={addHabit}>Add Habit</button>
      </div>
    </div>
  );
}

export default HabitTracker;
