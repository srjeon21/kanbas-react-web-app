import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from './Courses/routes.js';

const app = express();
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
app.use(express.json());
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(4000);