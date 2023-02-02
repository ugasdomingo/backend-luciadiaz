//Import tools
import Anamnesis from "../models/Anamnesis";

// getAllAnamnesis Controller
export const getAllAnamnesis = async (req: any, res: any) => {
    try {
		const anamnesis = await Anamnesis.find();
		res.send(anamnesis);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
}

// getAnamnesis By User ID Controller
export const getAnamnesisByUserID = async (req: any, res: any) => {
    try {
		const anamnesis = await Anamnesis.find({
			uid: req.params.id,
		}).lean();
		return res.json({ anamnesis });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}   
}

export const createAnamnesis = async (req: any, res: any) => {
    try {
        const { response } = req.body;

        const anamnesis = new Anamnesis({
            response,
            uid: req.uid
        })
        await anamnesis.save();

        res.json({ anamnesis })

    } catch (error: any) {
		return res.status(500).json({ message: error.message });
    }
}