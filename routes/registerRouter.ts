//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { userAuth } from "../middleware/userAuth";
import Register from "../models/Register";
import { UserModel } from "../models/User";

//Define router
const registerRouter = Router();

//Routes
registerRouter.get("/register", adminAuth, async (req: any, res: any) => {
	try {
		const register = await Register.find().lean();
		return res.json({ register });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
});

registerRouter.get("/register/:id", adminAuth, async (req: any, res: any) => {
	try {
		const register = await Register.find({ uid: req.params.id }).lean();
		return res.json({ register });
	} catch (error: any) {
		return res.status(500).json({ message: error.message });
	}
});

registerRouter.post("/register", userAuth, async (req: any, res: any) => {
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
});

registerRouter.delete(
	"/register/:id",
	adminAuth,
	async (req: any, res: any) => {
		try {
			const register = await Register.findById(req.params.id);

			if (!register)
				return res
					.status(404)
					.json({ message: "register no encontrado" });

			await register.remove();

			res.send({ register });
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	}
);

registerRouter.put("/register/:id", adminAuth, async (req: any, res: any) => {
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
});

//Export routes
export default registerRouter;
