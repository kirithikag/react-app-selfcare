import React, { useState } from 'react';
import './Reminders.css'; // Import the CSS

function Reminders() {
  const [reminders, setReminders] = useState([
    { time: '08:00 AM', task: 'Morning Yoga' },
    { time: '10:00 AM', task: 'Drink Water' },
  ]);
  const [newReminder, setNewReminder] = useState({ time: '', task: '' });

  const addReminder = () => {
    if (newReminder.time && newReminder.task.trim()) {
      setReminders([...reminders, newReminder].sort((a, b) => a.time.localeCompare(b.time)));
      setNewReminder({ time: '', task: '' });
    }
  };

  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  const editReminder = (index, field, value) => {
    const newReminders = [...reminders];
    newReminders[index][field] = value;
    setReminders(newReminders.sort((a, b) => a.time.localeCompare(b.time)));
  };

  return (
    <div className="reminders-container">
      <h2 className="reminders-header">Reminders</h2>
      <ul className="reminder-list">
        {reminders.map((reminder, index) => (
          <li key={index} className="reminder-item">
            <input
              type="time"
              value={reminder.time}
              onChange={(e) => editReminder(index, 'time', e.target.value)}
            />
            <input
              type="text"
              value={reminder.task}
              onChange={(e) => editReminder(index, 'task', e.target.value)}
            />
            <button onClick={() => deleteReminder(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="add-reminder-section">
        <input
          type="time"
          value={newReminder.time}
          onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task"
          value={newReminder.task}
          onChange={(e) => setNewReminder({ ...newReminder, task: e.target.value })}
        />
        <button onClick={addReminder}>Add Reminder</button>
      </div>
    </div>
  );
}

export default Reminders;
