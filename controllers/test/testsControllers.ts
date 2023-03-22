//Import tools
import Test from "../../models/test/Test";

// GET All Tests
export const getAllTests = async (req: any, res: any) => {
	try {
		const tests = await Test.find();
		return res.json({ tests });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// CREATE a Test
export const createTests = async (req: any, res: any) => {
    try {
        const {
            title,
            questions,
            analyticsResults,
        } = req.body;

        const tests = new Test({
            title,
            questions,
            analyticsResults,
        });

        await tests.save();

        res.json({ tests });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// DELETE a Test
export const deleteTests = async (req: any, res: any) => {
	try {
		const tests = await Test.findById(req.params.id);

		if (!tests)
			return res
				.status(404)
				.json({ message: "Tests no encontrado" });

		await tests.remove();

		res.send({ tests });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};