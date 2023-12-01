import { Router } from "express";
import {
    createPatient,
    getPatients,
    getPatientById,
    updatePatientById,
    deletePatientById
} from "../controllers/patients.controller.js";

const router = Router();

// /api/patients
router.post("/patients", createPatient);
router.get("/patients", getPatients);
router.get("/patients/:id", getPatientById);
router.put("/patients/:id", updatePatientById);
router.delete("/patients/:id", deletePatientById);

export default router;