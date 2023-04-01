//Import tools
import TestResults from "../../models/test/TestResults";

// getAllTestResults Controller
export const getAllTestResults = async (req: any, res: any) => {
    try {
		const testsResults = await TestResults.find().lean();

		return res.json({ testsResults });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
}

// getTestResults By User ID Controller
export const getTestResultsByUserID = async (req: any, res: any) => {
    try {
		const testsResults = await TestResults.find({uid: req.params.id});

		return res.json({ testsResults });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}   
}

export const createTestResults = async (req: any, res: any) => {
    try {
        const { answers, testTitle } = req.body;

        const testResults = new TestResults({
            answers,
			testTitle,
            uid: req.uid
        })
        await testResults.save();

        res.json({ testResults })

    } catch (error: any) {
		return res.status(500).json({ message: error.message });
    }
};

// DELETE a testResults
export const deleteTestsResults = async (req: any, res: any) => {
	try {
		const testsResults = await TestResults.findById(req.params.id);

		if (!testsResults)
			return res
				.status(404)
				.json({ message: "Tests no encontrado" });

		if (req.uid != testsResults.uid)
			return res.status(401).json({message: 'No autoriado para realizar esta acción'})

		await testsResults.remove();

		res.send({ testsResults });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};