//Import tools
import { Router } from "express";
import { userAuth } from "../../middleware/userAuth";
import { adminAuth } from "../../middleware/adminAuth";
import fs from "fs-extra";
import fileUpload from "express-fileupload";
import { createBooks, getAllBooks, deleteBooks, getBookByID } from "../../controllers/books/booksControllers";

//Define router
const booksRouter = Router();

//Routes
booksRouter.get('/all', getAllBooks);

booksRouter.post('/', fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
}), userAuth, createBooks )

booksRouter.get('/:id' , getBookByID)
booksRouter.delete('/:id', adminAuth ,deleteBooks)

//Export routes
export default booksRouter;


