//Import tools
import Books from "../../models/books/Books";
import { uploadImage } from "../../utils/cloudinary";
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
        } = req.body;

        const books = new Books({
            booksName,
            booksType,
            description,
            creationsDate,
            price,
            tags,
            author,
            uid: req.uid,
        });

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            books.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.image.tempFilePath);
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

		await Books.remove();

		res.send({ books });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};