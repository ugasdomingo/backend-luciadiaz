//Import tools
import BestDadForm from '../../models/books/BestDadForm';
import { uploadImage } from "../../utils/cloudinary";
import fs from "fs-extra";

// GET All Best Dad Forms
export const getAllBestDadForms = async (req: any, res: any) => {
	try {
		const bestDadForm = await BestDadForm.find();
		return res.json({ bestDadForm });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// Create Best Dad Request
export const createBestDad = async (req: any, res: any) => {
    try {
        const {
            dadsName,
            childsName,
            backgroundColor,
            direction,
        } = req.body;

        const bestDadForm = new BestDadForm({
            dadsName,
            childsName,
            backgroundColor,
            direction,
            uid: req.uid,
        });

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            bestDadForm.image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.image.tempFilePath);
        }

        await bestDadForm.save();

        res.json({ bestDadForm });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// delete Best Dad Controller
export const deleteBestDadForm = async (req: any, res: any) => {
	try {
		const bestDadForm = await BestDadForm.findById(req.params.id);

		if (!bestDadForm)
			return res
				.status(404)
				.json({ message: "BestDadForm no encontrado" });

		await BestDadForm.remove();

		res.send({ BestDadForm });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};