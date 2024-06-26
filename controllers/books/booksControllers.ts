//Import tools
import Books from '../../models/books/Books';
import { uploadBookImage, deleteImage } from '../../utils/cloudinary';
import fs from 'fs-extra';

// GET All Books
export const getAllBooks = async (req: any, res: any) => {
    try {
        const books = await Books.find();
        return res.status(200).json({ books });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// GET A Book by ID
export const getBookByID = async (req: any, res: any) => {
    try {
        const book = await Books.findById(req.params.id);
        return res.status(200).json({ book });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// CREATE a Book
export const createBooks = async (req: any, res: any) => {
    try {
        const {
            booksName,
            description,
            price,
            author,
            extraInfo,
            paypalButton,
        } = req.body;

        const books = new Books({
            booksName,
            description,
            price,
            author,
            extraInfo,
            paypalButton,
        });

        if (req.files?.coverImage) {
            const result = await uploadBookImage(
                req.files.coverImage.tempFilePath
            );
            books.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.coverImage.tempFilePath);
        }

        await books.save();

        res.status(201).json({ books });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// DELETE a Book
export const deleteBooks = async (req: any, res: any) => {
    try {
        const books = await Books.findById(req.params.id);

        if (!books)
            return res.status(404).json({ message: 'Books no encontrado' });

        await deleteImage(books.coverImage);
        await Books.remove();

        res.status(200).json({ books });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
