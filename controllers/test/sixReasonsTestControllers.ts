//Import tools
import SixReasonsTest from "../../models/test/SixReasonsTest";

// getAllSixReasonsTest --> Line 10
// createSixReasonsTest --> Line 20
// getSixReasonsTest --> Line 40
// deleteSixReasonsTest --> Line 52
// updateSixReasonsTest --> Line 70

// getAllSixReasonsTest Controller
export const getAllSixReasonsTest = async (req: any, res: any) => {
	try {
		const sixReasonsTest = await SixReasonsTest.find();
		return res.json({ sixReasonsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createSixReasonsTest Controller
export const createSixReasonsTest = async (req: any, res: any) => {
	try {
		const { reasons, objetive, username } = req.body;

		console.log(objetive)

		const sixReasonsTest = new SixReasonsTest({
			objetive,
			username,
			reasons,
			uid: req.uid,
		});
		await sixReasonsTest.save();

		res.json({ sixReasonsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getSixReasonsTest Controller
export const getSixReasonsTest = async (req: any, res: any) => {
	try {
		const sixReasonsTest = await SixReasonsTest.find({
			uid: req.params.id,
		}).lean();
		return res.json({ sixReasonsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// deleteSixReasonsTest Controller
export const deleteSixReasonsTest = async (req: any, res: any) => {
	try {
		const sixReasonsTest = await SixReasonsTest.findById(req.params.id);

		if (!sixReasonsTest)
			return res
				.status(404)
				.json({ message: "SixReasonsTest no encontrado" });

		await sixReasonsTest.remove();

		res.send({ sixReasonsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// updateSixReasonsTest Controller
export const updateSixReasonsTest = async (req: any, res: any) => {
	try {
		const sixReasonsTest = await SixReasonsTest.findById(req.params.id);

		if (!sixReasonsTest)
			return res.status(404).json({ message: "Registro no encontrado" });

		const updatedSixReasonsTest = await SixReasonsTest.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json({ updatedSixReasonsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
