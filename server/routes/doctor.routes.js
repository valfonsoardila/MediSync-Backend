import { Router } from "express";
import {
    createDoctor,
    getDoctors,
    getDoctorById,
    updateDoctorById,
    deleteDoctorById
} from "../controllers/doctors.controller.js";

const router = Router();

// /api/doctors
router.post("/doctors", createDoctor);
router.get("/doctors", getDoctors);
router.get("/doctors/:id", getDoctorById);
router.put("/doctors/:id", updateDoctorById);
router.delete("/doctors/:id", deleteDoctorById);

export default router;