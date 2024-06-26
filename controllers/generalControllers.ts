//Import tools
import TherapyNotes from '../models/therapy/TherapyNotes';
import TherapyTasks from '../models/therapy/TherapyTasks';
import TestResults from '../models/test/TestResults';
import Enrollment from '../models/formations/Enrollment';
import Sells from '../models/books/Sells';

//Get Initial Desk Data
export const getInitialUserData = async (req: any, res: any) => {
    try {
        const uid = req.uid;

        const therapyNotes = await TherapyNotes.find({ uid });
        const therapyTasks = await TherapyTasks.find({ uid });
        const testResults = await TestResults.find({ uid });
        const enrollments = await Enrollment.find({ uid });
        const sells = await Sells.find({ uid });

        res.status(200).json({
            therapyNotes,
            therapyTasks,
            testResults,
            enrollments,
            sells,
        });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

//Get Initial Desk Data for Admin
export const getInitialAdminData = async (req: any, res: any) => {
    try {
        const uid = req.params.uid;

        const therapyNotes = await TherapyNotes.find({ uid });
        const therapyTasks = await TherapyTasks.find({ uid });
        const testResults = await TestResults.find({ uid });
        const enrollments = await Enrollment.find({ uid });
        const sells = await Sells.find({ uid });

        res.status(200).json({
            therapyNotes,
            therapyTasks,
            testResults,
            enrollments,
            sells,
        });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
