const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const courses = [
  {
    id: 1,
    title: "React Basics",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Learn the basics of React.js"
  },
  {
    id: 2,
    title: "Node.js API",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Build APIs with Node.js"
  }
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
