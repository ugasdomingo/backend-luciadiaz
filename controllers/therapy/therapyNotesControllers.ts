//Import tools
import TherapyNotes from '../../models/therapy/TherapyNotes';

// getAllTherapy --> Line 10
// createTherapy --> Line 20
// getTherapy --> Line 34
// deleteTherapy --> Line 47
// updateTherapy --> Line 60

// getAllTherapy Controller
export const getAllTherapyNotes = async (req: any, res: any) => {
    try {
        const therapys = await TherapyNotes.find();
        res.status(200).json({ therapys });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// createTherapy Controller
export const createTherapyNotes = async (req: any, res: any) => {
    try {
        const { uid, motivo, observations } = req.body;

        const therapyNotes = new TherapyNotes({ uid, motivo, observations });
        await therapyNotes.save();

        res.status(201).json({ therapyNotes });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getTherapy Controller
export const getTherapy = async (req: any, res: any) => {
    try {
        const therapyNotes = await TherapyNotes.findById(req.params.id);

        if (!therapyNotes)
            return res
                .status(404)
                .json({ message: 'Therapy note no encontrado' });
        res.status(200).json({ therapyNotes });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// deleteTherapy Controller
export const deleteTherapy = async (req: any, res: any) => {
    try {
        const therapyNotes = await TherapyNotes.findByIdAndDelete(
            req.params.id
        );

        if (!therapyNotes)
            return res.status(404).json({ message: 'Therapy no encontrado' });
        res.status(200).json({ message: 'Therapy eliminado' });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// updateTherapy Controller
export const updateTherapy = async (req: any, res: any) => {
    try {
        const updatedTherapyNotes = await TherapyNotes.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedTherapyNotes)
            return res.status(404).json({ message: 'Therapy no encontrado' });
        res.status(200).json({ updatedTherapyNotes });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};
