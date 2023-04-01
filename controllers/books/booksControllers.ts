//Import tools
import Books from "../../models/books/Books";
import { uploadImage, deleteImage } from "../../utils/cloudinary";
import fs from "fs-extra";

// GET All Books
export const getAllBooks = async (req: any, res: any) => {
	try {
		const books = await Books.find();
		return res.json({ books });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// GET A Book by ID
export const getBookByID = async (req: any, res: any) => {
	try {
		const book = await Books.findById(req.params.id)
		return res.json({ book });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// CREATE a Book
export const createBooks = async (req: any, res: any) => {
    try {
        const {
            booksName,
            booksType,
            description,
            creationsDate,
            price,
            tags,
            author,
            paypalButton,
        } = req.body;

        const books = new Books({
            booksName,
            booksType,
            description,
            creationsDate,
            price,
            tags,
            author,
            paypalButton,
            uid: req.uid,
        });

        if (req.files?.coverImage) {
            const result = await uploadImage(req.files.coverImage.tempFilePath);
            books.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.coverImage.tempFilePath);
        }

        await books.save();

        res.json({ books });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// DELETE a Book
export const deleteBooks = async (req: any, res: any) => {
	try {
		const books = await Books.findById(req.params.id);

		if (!books)
			return res
				.status(404)
				.json({ message: "Books no encontrado" });

        await deleteImage(books.coverImage);
		await Books.remove();

		res.send({ books });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};