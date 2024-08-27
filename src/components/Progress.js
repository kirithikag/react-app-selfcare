import React from 'react';
import './Progress.css'; // Import the CSS

function Progress({ habits, reminders }) {
  const completedHabits = habits.filter(habit => habit.completed).length;
  const totalHabits = habits.length;
  const completionPercentage = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  return (
    <div className="progress-container">
      <h2 className="progress-header">Your Progress</h2>
      <div className="progress-summary">
        <h3>Habit Tracker Summary</h3>
        <p>Total Habits: {totalHabits}</p>
        <p>Completed Habits: {completedHabits}</p>
        <p>Completion Rate: {completionPercentage.toFixed(2)}%</p>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{ width: `${completionPercentage}%`, backgroundColor: completionPercentage === 100 ? '#28a745' : '#007BFF' }}
          >
            {completionPercentage.toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="progress-summary">
        <h3>Reminders Summary</h3>
        <p>Total Reminders: {reminders.length}</p>
      </div>

      <div>
        <h3>Next Steps</h3>
        <p>Keep tracking your habits and setting reminders to improve your self-care routine!</p>
      </div>
    </div>
  );
}

export default Progress;
