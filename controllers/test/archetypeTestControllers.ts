//Import tools
import ArchetypeTest from "../../models/test/ArchetypeTest";

// getAllArchetypeTest --> Line 10
// createArchetypeTest --> Line 20
// getArchetypeTest --> Line 40
// deleteArchetypeTest --> Line 52
// updateArchetypeTest --> Line 70

// getAllArchetypeTest Controller
export const getAllArchetypeTest = async (req: any, res: any) => {
	try {
		const archetypeTest = await ArchetypeTest.find();
		return res.json({ archetypeTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createArchetypeTest Controller
export const createArchetypeTest = async (req: any, res: any) => {
	try {
		const { wise, warrior, wizard, lover } = req.body;

		const archetypeTest = new ArchetypeTest({
			wise,
			warrior,
			wizard,
			lover,
			uid: req.uid,
		});
		await archetypeTest.save();

		res.json({ archetypeTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getArchetypeTest Controller
export const getArchetypeTest = async (req: any, res: any) => {
	try {
		const archetypeTest = await ArchetypeTest.find({
			uid: req.params.id,
		}).lean();
		return res.json({ archetypeTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// deleteArchetypeTest Controller
export const deleteArchetypeTest = async (req: any, res: any) => {
	try {
		const archetypeTest = await ArchetypeTest.findById(req.params.id);

		if (!archetypeTest)
			return res
				.status(404)
				.json({ message: "ArchetypeTest no encontrado" });

		await archetypeTest.remove();

		res.send({ archetypeTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// updateArchetypeTest Controller
export const updateArchetypeTest = async (req: any, res: any) => {
	try {
		const archetypeTest = await ArchetypeTest.findById(req.params.id);

		if (!archetypeTest)
			return res.status(404).json({ message: "Registro no encontrado" });

		const updatedArchetypeTest = await ArchetypeTest.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json({ updatedArchetypeTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
