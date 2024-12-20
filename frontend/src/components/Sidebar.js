import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Filter By</h3>
      <div className="filter-group">
        <label>All Courses</label>
        <input type="checkbox" />
      </div>
      <div className="filter-group">
        <label>Level</label>
        <select>
          <option>All</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Duration</label>
        <select>
          <option>0-3 months</option>
          <option>3-6 months</option>
          <option>6+ months</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
