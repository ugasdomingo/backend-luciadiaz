//Import tools
import Courses from "../../models/cursos/Courses";

// getAllCourses --> Line 10
// createCourses --> Line 20
// getCourses --> Line 34
// deleteCourses --> Line 47
// updateCourses --> Line 60

// getAllCourses Controller
export const getAllCourses = async (req: any, res: any) => {
	try {
		const courses = await Courses.find();
		res.send(courses);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// createCourses Controller
export const createCourses = async (req: any, res: any) => {
	try {
		const { date, formationName, price, location, imageUrl } = req.body;

		const courses = new Courses({ date, formationName, price, location, imageUrl });
		await courses.save();

		res.json(courses);
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
};

// getCourses Controller
export const getCourses = async (req: any, res: any) => {
	try {
		const courses = await Courses.findById(req.params.id);

		if (!courses)
			return res.status(404).json({ message: "Courses no encontrado" });
		res.send(courses);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// deleteCourses Controller
export const deleteCourses = async (req: any, res: any) => {
	try {
		const courses = await Courses.findByIdAndDelete(req.params.id);

		if (!courses)
			return res.status(404).json({ message: "Courses no encontrado" });
		res.send(courses);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};

// updateCourses Controller
export const updateCourses = async (req: any, res: any) => {
	try {
		const updatedCourses = await Courses.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedCourses)
			return res.status(404).json({ message: "Courses no encontrado" });
		res.json(updatedCourses);
	} catch (error) {
		return res.status(500).json({ message: "Formato id inválido" });
	}
};