import { Router } from "express";
import {
    createDoctor,
    getDoctors,
    getDoctorById,
    updateDoctorById,
    deleteDoctorById
} from "../controllers/doctor.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { createDoctorSchema, updateDoctorSchema } from "../schemas/doctor.schemas.js";

const router = Router();

// /api/doctors
router.post("/doctors", authRequired, validateSchema(createDoctorSchema), createDoctor);
router.get("/doctors", getDoctors);
router.get("/doctors/:id", authRequired, getDoctorById);
router.put("/doctors/:id", authRequired, validateSchema(updateDoctorSchema), updateDoctorById);
router.delete("/doctors/:id", authRequired, deleteDoctorById);

export default router;