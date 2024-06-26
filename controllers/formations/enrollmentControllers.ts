//Import tools
import Enrollment from '../../models/formations/Enrollment';
import { uploadPaymentProof, deleteImage } from '../../utils/cloudinary';
import fs from 'fs-extra';
import { IEnrollment } from '../../interfaces/Ienrollments';

// getAllEnrollment --> Line 10
// createEnrollment --> Line 20
// getEnrollment --> Line 34
// deleteEnrollment --> Line 47
// updateEnrollment --> Line 60

// getAllEnrollment Controller
export const getAllEnrollment = async (req: any, res: any) => {
    try {
        const enrollments = await Enrollment.find();
        res.status(200).json({ enrollments });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getEnrollment Controller
export const getEnrollment = async (req: any, res: any) => {
    try {
        const enrollment = await Enrollment.findById(req.params.id);

        if (!enrollment)
            return res
                .status(404)
                .json({ message: 'Enrollment no encontrado' });

        if (req.uid != enrollment?.uid)
            return res.status(401).json({
                message: 'No estás autorizado para ver esta información',
            });

        res.status(200).json({ enrollment });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// createEnrollment Controller
export const createEnrollment = async (req: any, res: any) => {
    try {
        const { fid, paymentMethod } = req.body;

        const enrollments = new Enrollment({
            fid,
            paymentMethod,
            uid: req.uid,
        });

        if (req.files?.paymentProof) {
            const result = await uploadPaymentProof(
                req.files.paymentProof.tempFilePath
            );
            enrollments.paymentProof = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.paymentProof.tempFilePath);
        }
        await enrollments.save();

        res.status(201).json({ enrollments });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// deleteEnrollment Controller
export const deleteEnrollment = async (req: any, res: any) => {
    try {
        const enrollments = await Enrollment.findByIdAndDelete(req.params.id);

        await deleteImage(enrollments?.paymentProof);

        if (!enrollments)
            return res
                .status(404)
                .json({ message: 'enrollments no encontrado' });
        res.status(200).json({ message: 'Enrollment eliminado' });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
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
            return res
                .status(404)
                .json({ message: 'Enrollment no encontrado' });
        res.status(200).json({ updatedEnrollment });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// Change payed status
export const updatePayed = async (req: any, res: any) => {
    try {
        const payed = req.body.payed;
        const enrollment: IEnrollment | null = await Enrollment.findById(
            req.params.id
        );

        if (!enrollment)
            return res
                .status(404)
                .json({ message: 'Enrollment no encontrado' });

        await enrollment.updatePayed(payed);

        res.status(200).json({ message: 'Estado de pago actualizado' });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
