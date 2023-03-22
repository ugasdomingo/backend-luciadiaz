//Import tools
import Therapy from "../models/Therapy";

// getAllTherapy --> Line 10
// createTherapy --> Line 20
// getTherapy --> Line 34
// deleteTherapy --> Line 47
// updateTherapy --> Line 60

// getAllTherapy Controller
export const getAllTherapy = async (req: any, res: any) => {
	try {
		const therapys = await Therapy.find();
		res.send(therapys);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createTherapy Controller
export const createTherapy = async (req: any, res: any) => {
	try {
		const { motivo, observations, todos } = req.body;

		const therapy = new Therapy({ motivo, observations, todos });
		await therapy.save();

		res.json(therapy);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getTherapy Controller
export const getTherapy = async (req: any, res: any) => {
	try {
		const therapy = await Therapy.findById(req.params.id);

		if (!therapy)
			return res.status(404).json({ message: "Therapy no encontrado" });
		res.send(therapy);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// deleteTherapy Controller
export const deleteTherapy = async (req: any, res: any) => {
	try {
		const therapy = await Therapy.findByIdAndDelete(req.params.id);

		if (!therapy)
			return res.status(404).json({ message: "Therapy no encontrado" });
		res.send(Therapy);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// updateTherapy Controller
export const updateTherapy = async (req: any, res: any) => {
	try {
		const updatedTherapy = await Therapy.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedTherapy)
			return res.status(404).json({ message: "Therapy no encontrado" });
		res.json(updatedTherapy);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};