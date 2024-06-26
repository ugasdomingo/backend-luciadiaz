//Import tools
import Post from '../models/Post';
import { uploadPostImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

// getAllPost --> Line 10
// createPost --> Line 20
// getPost --> Line 34
// deletePost --> Line 47
// updatePost --> Line 60

// getAllPost Controller
export const getAllPost = async (req: any, res: any) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ posts });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// createPost Controller
export const createPost = async (req: any, res: any) => {
    try {
        const { title, category, body, urlVideo } = req.body;

        const post = new Post({ title, category, body, urlVideo });

        if (req.files?.img) {
            const result = await uploadPostImage(req.files.img.tempFilePath);
            post.img = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.img.tempFilePath);
        }
        await post.save();

        res.status(201).json({ post });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getPost Controller
export const getPost = async (req: any, res: any) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post)
            return res.status(404).json({ message: 'Post no encontrado' });
        res.status(200).json({ post });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// deletePost Controller
export const deletePost = async (req: any, res: any) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post)
            return res.status(404).json({ message: 'Post no encontrado' });

        await deleteImage(post.img);
        res.status(200).json({ message: 'Post eliminado' });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// updatePost Controller
export const updatePost = async (req: any, res: any) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedPost)
            return res.status(404).json({ message: 'Post no encontrado' });
        res.status(200).json({ updatedPost });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};
