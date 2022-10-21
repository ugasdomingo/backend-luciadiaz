//Import tools
import Register from "../models/Register";

// getAllRegisters --> Line 10
// createRegister --> Line 20
// getRegister --> Line 41
// deleteRegister --> Line 51
// updateRegister --> Line 67

// getAllRegisters Controller
export const getAllRegisters = async (req: any, res: any) => {
	try {
		const register = await Register.find().lean();
		return res.json({ register });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createRegister Controller
export const createRegister = async (req: any, res: any) => {
	try {
		const { date, pensamiento, emocion, accion, detonante } = req.body;

		const register = new Register({
			date,
			pensamiento,
			emocion,
			accion,
			detonante,
			uid: req.uid,
		});
		await register.save();

		res.json({ register });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getRegister by User ID Controller
export const getRegister = async (req: any, res: any) => {
	try {
		const register = await Register.find({ uid: req.params.id }).lean();
		return res.json({ register });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// deleteRegister Controller
export const deleteRegister = async (req: any, res: any) => {
	try {
		const register = await Register.findById(req.params.id);

		if (!register)
			return res.status(404).json({ message: "register no encontrado" });

		await register.remove();

		res.send({ register });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// updateRegister Controller
export const updateRegister = async (req: any, res: any) => {
	try {
		const register = await Register.findById(req.params.id);

		if (!register)
			return res.status(404).json({ message: "Registro no encontrado" });

		const updatedRegister = await Register.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json({ updatedRegister });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
