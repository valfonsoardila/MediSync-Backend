import Doctor from "../models/doctor.model.js";

// Create and Save a new Doctor
export const createDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor({
      ...req.body,
      userId: req.userId,
    });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
};
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
};
export const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
        }
        res.status(200).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
};
export const updateDoctorById = async (req, res) => {
    try{
        const doctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" });
        }
        res.status(200).json(doctor);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
};
export const deleteDoctorById = async (req, res) => {
    try{
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).json({ error: "Doctor not found" });
        }
        res.status(200).json({ message: "Doctor deleted successfully" });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
};
