//Import tools
import Enrollment from "../../models/formations/Enrollment";

// getAllEnrollment --> Line 10
// createEnrollment --> Line 20
// getEnrollment --> Line 34
// deleteEnrollment --> Line 47
// updateEnrollment --> Line 60

// getAllEnrollment Controller
export const getAllEnrollment = async (req: any, res: any) => {
	try {
		const enrollments = await Enrollment.find();
		res.send(enrollments);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createEnrollment Controller
export const createEnrollment = async (req: any, res: any) => {
	try {
		const { formationID, paymentMethod, numberProof } = req.body;

		const enrollments = new Enrollment({ formationID, numberProof, paymentMethod, uid: req.uid, });
		await enrollments.save();

		res.json(enrollments);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getEnrollment Controller
export const getEnrollment = async (req: any, res: any) => {
	try {
		const enrollments = await Enrollment.findById(req.params.id);
		
		if (!enrollments)
			return res.status(404).json({ message: "Enrollment no encontrado" });

		if (req.uid != enrollments?.uid)
			return res.status(401).json({ message: "No estás autorizado para ver esta información" });

		res.send(enrollments);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// deleteEnrollment Controller
export const deleteEnrollment = async (req: any, res: any) => {
	try {
		const enrollments = await Enrollment.findByIdAndDelete(req.params.id);

		if (!enrollments)
			return res.status(404).json({ message: "enrollments no encontrado" });
		res.send(enrollments);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// updateEnrollment Controller
export const updateEnrollment = async (req: any, res: any) => {
	try {
		const updatedEnrollment = await Enrollment.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedEnrollment)
			return res.status(404).json({ message: "Enrollment no encontrado" });
		res.json(updatedEnrollment);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};