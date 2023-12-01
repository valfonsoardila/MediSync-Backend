import Patient from "../models/patient.model.js";

// Create and Save a new Patient
export const createPatient = async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
};
export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
}
export const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.status(200).json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
};
export const updatePatientById = async (req, res) => {
    try{
        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.status(200).json(patient);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
};
export const deletePatientById = async (req, res) => {
    try{
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.status(200).json({ message: "Patient deleted successfully" });
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
}
