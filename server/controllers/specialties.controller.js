import Specialty from '../models/specialty.model';

// Create and Save a new Specialty
export const createSpecialty = async (req, res) => {
    try {
        const newSpecialty = new Specialty(req.body);
        await newSpecialty.save();
        res.status(201).json(newSpecialty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const getSpecialties = async (req, res) => {
    try {
        const specialties = await Specialty.find();
        res.status(200).json(specialties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const getSpecialtyById = async (req, res) => {
    try {
        const specialty = await Specialty.findById(req.params.id);
        if (!specialty) {
            return res.status(404).json({ error: 'Specialty not found' });
        }
        res.status(200).json(specialty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const updateSpecialtyById = async (req, res) => {
    try {
        const specialty = await Specialty.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!specialty) {
            return res.status(404).json({ error: 'Specialty not found' });
        }
        res.status(200).json(specialty);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};
export const deleteSpecialtyById = async (req, res) => {
    try {
        const specialty = await Specialty.findByIdAndDelete(req.params.id);
        if (!specialty) {
            return res.status(404).json({ error: 'Specialty not found' });
        }
        res.status(200).json({ message: 'Specialty deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error, please try again' });
    }
};

