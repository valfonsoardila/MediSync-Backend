import { Router } from "express";
import {
    createDoctor,
    getDoctors,
    getDoctorById,
    updateDoctorById,
    deleteDoctorById
} from "../controllers/doctor.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

// /api/doctors
router.post("/doctors", authRequired, createDoctor);
router.get("/doctors", authRequired, getDoctors);
router.get("/doctors/:id", authRequired, getDoctorById);
router.put("/doctors/:id", authRequired, updateDoctorById);
router.delete("/doctors/:id", authRequired, deleteDoctorById);

export default router;