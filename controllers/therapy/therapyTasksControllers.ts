//Import tools
import TherapyTasks from '../../models/therapy/TherapyTasks';
import { ITherapyTask } from '../../interfaces/itherapyTask';

// getAllTherapyTasks Controller
export const getAllTherapyTasks = async (req: any, res: any) => {
    try {
        const therapys = await TherapyTasks.find();
        res.status(200).json({ therapys });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// createTherapyTasks Controller
export const createTherapyTasks = async (req: any, res: any) => {
    try {
        const { uid, task, observations } = req.body;

        const therapyTasks = new TherapyTasks({ uid, task, observations });
        await therapyTasks.save();

        res.status(201).json({ therapyTasks });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getTherapyTasks Controller
export const getTherapyTasks = async (req: any, res: any) => {
    try {
        const therapyTasks = await TherapyTasks.findById(req.params.id);

        if (!therapyTasks)
            return res
                .status(404)
                .json({ message: 'Therapy task no encontrado' });
        res.status(200).json({ therapyTasks });
    } catch (error: any) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// deleteTherapyTasks Controller
export const deleteTherapyTasks = async (req: any, res: any) => {
    try {
        const therapyTasks = await TherapyTasks.findByIdAndDelete(
            req.params.id
        );

        if (!therapyTasks)
            return res.status(404).json({ message: 'Therapy no encontrado' });
        res.status(200).json({ message: 'Therapy eliminado' });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// updateTherapyTasks Controller
export const updateTherapyTasks = async (req: any, res: any) => {
    try {
        const therapyTasks: ITherapyTask | null = await TherapyTasks.findById(
            req.params.id
        );

        if (!therapyTasks)
            return res
                .status(404)
                .json({ message: 'Therapy task no encontrado' });

        await therapyTasks.updateStatus(req.body.status);

        res.status(200).json({ message: 'Therapy task actualizado' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
