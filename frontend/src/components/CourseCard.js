const CourseCard = ({ image, title, instructor, price }) => {
    return (
      <div className="course-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{instructor}</p>
        <p>{price}</p>
        <button>Enroll Now</button>
      </div>
    );
  };
  
  const CoursesList = ({ title, courses }) => {
    return (
      <section className="courses-section">
        <h2>{title}</h2>
        <div className="course-cards">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>
    );
  };
  
  export default CoursesList;
  