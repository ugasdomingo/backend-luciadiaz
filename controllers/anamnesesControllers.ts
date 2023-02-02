//Import tools
import Anamneses from "../models/Anamneses";

// getAllAnamneses Controller
export const getAllAnamneses = async (req: any, res: any) => {
    try {
		console.log('llego a controlador')
		const anamneses = await Anamneses.find().lean();
		return res.json({ anamneses });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
}

// getAnamneses By User ID Controller
export const getAnamnesesByUserID = async (req: any, res: any) => {
    try {
		const anamneses = await Anamneses.find({
			uid: req.params.id,
		}).lean();
		return res.json({ anamneses });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}   
}

export const createAnamneses = async (req: any, res: any) => {
    try {
        const { respuestas } = req.body;

        const anamneses = new Anamneses({
            respuestas,
            uid: req.uid
        })
        await anamneses.save();

        res.json({ anamneses })

    } catch (error: any) {
		return res.status(500).json({ message: error.message });
    }
} 