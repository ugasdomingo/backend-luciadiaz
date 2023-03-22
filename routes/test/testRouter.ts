//Import tools
import { Router } from "express";
import { adminAuth } from "../../middleware/adminAuth";
import { getAllTests, createTests, deleteTests } from "../../controllers/test/testsControllers";

//Define router
const testRouter = Router();

//Routes
testRouter.get("/", getAllTests);

testRouter.post("/", adminAuth, createTests);

testRouter.delete("/:id", adminAuth, deleteTests);

//Export routes
export default testRouter;