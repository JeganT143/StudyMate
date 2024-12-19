const Sidebar = () => {
    return (
      <aside className="sidebar">
        <h3>All Courses</h3>
        <div>
          <h4>Level</h4>
          <ul>
            <li><input type="checkbox" /> All</li>
            <li><input type="checkbox" /> Beginner</li>
            <li><input type="checkbox" /> Advanced</li>
          </ul>
        </div>
        {/* Add similar filters for Duration, Price Range, Instructor, and Language */}
      </aside>
    );
  };
  
  export default Sidebar;
  