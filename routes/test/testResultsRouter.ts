//Import tools
import { Router } from "express";
import { adminAuth } from "../../middleware/adminAuth";
import { userAuth } from "../../middleware/userAuth";
import { getAllTestResults, getTestResultsByUserID, createTestResults, deleteTestsResults } from "../../controllers/test/testResultsControllers";

//Define router
const testResultsRouter = Router();

//Routes
testResultsRouter.get("/", adminAuth, getAllTestResults);

testResultsRouter.post("/", userAuth, createTestResults);

testResultsRouter.get("/:id", userAuth, getTestResultsByUserID);

testResultsRouter.delete("/:id", userAuth, deleteTestsResults);

//Export routes
export default testResultsRouter;