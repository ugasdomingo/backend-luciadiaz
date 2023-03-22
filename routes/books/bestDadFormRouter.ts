//Import tools
import { Router } from "express";
import { userAuth } from "../../middleware/userAuth";
import { adminAuth } from "../../middleware/adminAuth";
import fs from "fs-extra";
import fileUpload from "express-fileupload";
import { createBestDad, deleteBestDadForm } from "../../controllers/books/bestDadFormControllers"

//Define router
const bestDadRouter = Router();

//Routes
bestDadRouter.post('/', fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
}), userAuth, createBestDad )

bestDadRouter.delete('/:id', adminAuth, deleteBestDadForm)

//Export routes
export default bestDadRouter;