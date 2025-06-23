import React, { useEffect, useState } from 'react';
import CoursePlayer from './CoursePlayer';

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div className="container">
      <h1>🎓 Online Learning Platform</h1>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card" onClick={() => setSelectedCourse(course)}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
      {selectedCourse && (
        <CoursePlayer course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
}

export default App;
