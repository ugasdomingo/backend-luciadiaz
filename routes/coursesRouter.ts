//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { createCourses, getAllCourses, deleteCourses, updateCourses, getCourses } from "../controllers/coursesControllers";

//Define router
const coursesRouter = Router();

//Routes
coursesRouter.get("/", getAllCourses);

coursesRouter.post("/", adminAuth, createCourses);

coursesRouter.get("/:id", getCourses);

coursesRouter.delete("/:id", adminAuth, deleteCourses);

coursesRouter.put("/:id", adminAuth, updateCourses);

//Export routes
export default coursesRouter;