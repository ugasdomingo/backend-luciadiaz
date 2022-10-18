//Import tools
import ThoughtsTest from "../models/ThoughtsTest";

// getAllThoughtsTest --> Line 10
// createThoughtsTest --> Line 20
// getThoughtsTest --> Line 37
// deleteThoughtsTest --> Line 49
// updateThoughtsTest --> Line 67

// getAllThoughtsTest Controller
export const getAllThoughtsTest = async (req: any, res: any) => {
	try {
		const thoughtsTest = await ThoughtsTest.find();
		return res.json({ thoughtsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createThoughtsTest Controller
export const createThoughtsTest = async (req: any, res: any) => {
	try {
		const { results } = req.body;

		const thoughtsTest = new ThoughtsTest({
			results,
			uid: req.uid,
		});
		await thoughtsTest.save();

		res.json({ thoughtsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getThoughtsTest Controller
export const getThoughtsTest = async (req: any, res: any) => {
	try {
		const thoughtsTest = await ThoughtsTest.find({
			_id: req.params.id,
		}).lean();
		return res.json({ thoughtsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// deleteThoughtsTest Controller
export const deleteThoughtsTest = async (req: any, res: any) => {
	try {
		const thoughtsTest = await ThoughtsTest.findById(req.params.id);

		if (!thoughtsTest)
			return res
				.status(404)
				.json({ message: "thoughtsTest no encontrado" });

		await thoughtsTest.remove();

		res.send({ thoughtsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// updateThoughtsTest Controller
export const updateThoughtsTest = async (req: any, res: any) => {
	try {
		const thoughtsTest = await ThoughtsTest.findById(req.params.id);

		if (!thoughtsTest)
			return res.status(404).json({ message: "Registro no encontrado" });

		const updatedthoughtsTest = await ThoughtsTest.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json({ updatedthoughtsTest });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};
