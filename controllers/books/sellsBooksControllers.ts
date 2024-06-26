//Import tools
import Sells from '../../models/books/Sells';
import { uploadPaymentProof } from '../../utils/cloudinary';
import { ISells } from '../../interfaces/Isells';
import fs from 'fs-extra';

// GET All Sells
export const getAllSells = async (req: any, res: any) => {
    try {
        const sells = await Sells.find();
        return res.status(200).json({ sells });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// GET A Sell by ID
export const getSellByID = async (req: any, res: any) => {
    try {
        const sell = await Sells.findById(req.params.id);
        return res.status(200).json({ sell });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// CREATE a Sell
export const createSells = async (req: any, res: any) => {
    try {
        const { bid, paymentMethod, notes } = req.body;

        const sell = new Sells({
            bid,
            paymentMethod,
            uid: req.uid,
            notes,
        });

        if (req.files?.paymentProof) {
            const result = await uploadPaymentProof(
                req.files.paymentProof.tempFilePath
            );
            sell.paymentProof = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.paymentProof.tempFilePath);
        }

        await sell.save();
        return res.status(201).json({ sell });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Change payed status
export const updatePayed = async (req: any, res: any) => {
    try {
        const payed = req.body.payed;
        const sell: ISells | null = await Sells.findById(req.params.id);
        if (!sell) {
            return res.status(404).json({ message: 'Sell not found' });
        }

        await sell.updatePayed(payed);

        return res.status(200).json({ message: 'Payed status updated' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
