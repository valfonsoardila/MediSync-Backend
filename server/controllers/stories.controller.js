import ClinicalHistory from '../models/stories.model.js';

// Create and Save a new ClinicalHistory
export const createClinicalHistory = async (req, res) => {
    try {
        const newClinicalHistory = new ClinicalHistory(req.body);
        await newClinicalHistory.save();
        res.status(201).json(newClinicalHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const getClinicalHistorys = async (req, res) => {
    try {
        const clinicalHistorys = await ClinicalHistory.find();
        res.status(200).json(clinicalHistorys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const getClinicalHistoryById = async (req, res) => {
    try {
        const clinicalHistory = await ClinicalHistory.findById(req.params.id);
        if (!clinicalHistory) {
            return res.status(404).json({ error: 'ClinicalHistory not found' });
        }
        res.status(200).json(clinicalHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const updateClinicalHistoryById = async (req, res) => {
    try {
        const clinicalHistory = await ClinicalHistory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!clinicalHistory) {
            return res.status(404).json({ error: 'ClinicalHistory not found' });
        }
        res.status(200).json(clinicalHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const deleteClinicalHistoryById = async (req, res) => {
    try {
        const clinicalHistory = await ClinicalHistory.findByIdAndDelete(req.params.id);
        if (!clinicalHistory) {
            return res.status(404).json({ error: 'ClinicalHistory not found' });
        }
        res.status(200).json({ message: 'ClinicalHistory deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
