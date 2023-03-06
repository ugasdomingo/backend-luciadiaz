//Import tools
import BestDad from '../../models/materials/BestDad';
import { uploadImage } from "../../utils/cloudinary";
import fs from "fs-extra";


export const createBestDad = async (req: any, res: any) => {
    try {
        const {
            dadsName,
            childsName,
            backgroundColor,
            direction,
        } = req.body;

        const bestDad = new BestDad({
            dadsName,
            childsName,
            backgroundColor,
            direction,
            uid: req.uid,
        });

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            bestDad.image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.image.tempFilePath);
        }

        await bestDad.save();

        res.json({ bestDad });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}