import React from 'react';

function CoursePlayer({ course, onClose }) {
  return (
    <div className="player">
      <h2>{course.title}</h2>
      <video src={course.videoUrl} controls autoPlay width="100%" />
      <p>{course.description}</p>
      <button onClick={onClose}>❌ Close</button>
    </div>
  );
}

export default CoursePlayer;
