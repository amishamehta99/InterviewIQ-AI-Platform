import express from "express";
import { upload } from "../middlewares/multer.js";
import {
  analyzeResume,
  finishInterview,
  generateQuestion,
  getInterviewReport,
  getMyInterviews,
  submitAnswer
} from "../controllers/interview.controller.js";

const interviewRouter = express.Router();

// REMOVE isAuth temporarily
interviewRouter.post("/resume", upload.single("resume"), analyzeResume);
interviewRouter.post("/generate-questions", generateQuestion);
interviewRouter.post("/submit-answer", submitAnswer);
interviewRouter.post("/finish", finishInterview);

interviewRouter.get("/get-interview", getMyInterviews);
interviewRouter.get("/report/:id", getInterviewReport);

export default interviewRouter;