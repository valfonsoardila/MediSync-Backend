import { Router } from "express";
import {
    createPatient,
    getPatients,
    getPatientById,
    updatePatientById,
    deletePatientById
} from "../controllers/patient.controller.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { createPatientSchema, updatePatientSchema } from "../schemas/patient.schemas.js";

const router = Router();

// /api/patients
router.post("/patients", validateSchema(createPatientSchema), createPatient);
router.get("/patients", getPatients);
router.get("/patients/:id", getPatientById);
router.put("/patients/:id", validateSchema(updatePatientSchema), updatePatientById);
router.delete("/patients/:id", deletePatientById);

export default router;