import React from 'react';

const Header = ({ isDarkMode, onToggleDarkMode, onAccentColorChange, accentColor }) => {
  const colors = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Orange', value: '#f97316' }
  ];

  return (
    <div className="header">
      <h1>🚀 AI Resume Builder</h1>
      <div className="header-controls">
        <div className="color-picker">
          <label>Theme Color:</label>
          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color.value}
                className={`color-btn ${accentColor === color.value ? 'selected' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => onAccentColorChange(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>
        <button
          className="theme-toggle"
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Header;
