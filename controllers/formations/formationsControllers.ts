//Import tools
import Formations from "../../models/formations/Formations";
import { uploadImage, deleteImage } from "../../utils/cloudinary";
import fs from "fs-extra";

// getAllFormations --> Line 10
// createFormations --> Line 20
// getFormations --> Line 34
// deleteFormations --> Line 47
// updateFormations --> Line 60

// getAllFormations Controller
export const getAllFormations = async (req: any, res: any) => {
	try {
		const formations = await Formations.find();
		res.send(formations);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createFormations Controller
export const createFormations = async (req: any, res: any) => {
	try {
		const { 
			formationName,
			formationType,
			description,
			initialDate,
			price,
			location,
			coverImage,
			tags,
			paypalButton,
		} = req.body; 

		const formations = new Formations({  
			formationName,
			formationType,
			description,
			initialDate,
			price,
			location,
			coverImage,
			tags,
			paypalButton,
		});

		if (req.files?.coverImage) {
            const result = await uploadImage(req.files.coverImage.tempFilePath);
            formations.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.coverImage.tempFilePath);
        }

		await formations.save();

		res.json(formations);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getFormations Controller
export const getFormations = async (req: any, res: any) => {
	try {
		const formations = await Formations.findById(req.params.id);

		if (!formations)
			return res.status(404).json({ message: "Formations no encontrado" });
		res.send(formations);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// deleteFormations Controller
export const deleteFormations = async (req: any, res: any) => {
	try {
		const formations = await Formations.findByIdAndDelete(req.params.id);

		if (!formations)
			return res.status(404).json({ message: "Formations no encontrado" });

		await deleteImage(formations.coverImage);
		res.send(formations);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// updateFormations Controller
export const updateFormations = async (req: any, res: any) => {
	try {
		const updatedFormations = await Formations.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedFormations)
			return res.status(404).json({ message: "Formations no encontrado" });
		res.json(updatedFormations);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};