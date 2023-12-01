import Apointment from '../models/appointment.model.js';

export const createAppointment = async (req, res) => {
    try {
        const newAppointment = new Apointment(req.body);
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
}

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Apointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
}

export const getAppointmentById = async (req, res) => {
    try {
        const appointment = await Apointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        res.status(200).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
}

export const updateAppointmentById = async (req, res) => {
    try {
        const appointment = await Apointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!appointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        res.status(200).json(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
}

export const deleteAppointmentById = async (req, res) => {
    try {
        const appointment = await Apointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal error, please try again" });
    }
}