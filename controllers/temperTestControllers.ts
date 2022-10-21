//Import tools
import TemperTest from "../models/TemperTest";

// getAllTemperTest --> Line 10
// createTemperTest --> Line 20
// getTemperTest --> Line 40
// deleteTemperTest --> Line 52
// updateTemperTest --> Line 70

// getAllTemperTest Controller
export const getAllTemperTest = async (req: any, res: any) => {
	try {
		const temperTest = await TemperTest.find();
		return res.json({ temperTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createTemperTest Controller
export const createTemperTest = async (req: any, res: any) => {
	try {
		const { sanguine, choleric, phlegmatic, melancholic } = req.body;

		const temperTest = new TemperTest({
			sanguine,
			choleric,
			phlegmatic,
			melancholic,
			uid: req.uid,
		});
		await temperTest.save();

		res.json({ temperTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getTemperTest Controller
export const getTemperTest = async (req: any, res: any) => {
	try {
		const temperTest = await TemperTest.find({
			uid: req.params.id,
		}).lean();
		return res.json({ temperTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// deleteTemperTest Controller
export const deleteTemperTest = async (req: any, res: any) => {
	try {
		const temperTest = await TemperTest.findById(req.params.id);

		if (!temperTest)
			return res
				.status(404)
				.json({ message: "TemperTest no encontrado" });

		await temperTest.remove();

		res.send({ temperTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// updateTemperTest Controller
export const updateTemperTest = async (req: any, res: any) => {
	try {
		const temperTest = await TemperTest.findById(req.params.id);

		if (!temperTest)
			return res.status(404).json({ message: "Registro no encontrado" });

		const updatedTemperTest = await TemperTest.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json({ updatedTemperTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
