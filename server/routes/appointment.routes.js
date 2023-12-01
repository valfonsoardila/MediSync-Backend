import { Router } from "express";
import {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointmentById,
    deleteAppointmentById,
} from "../controllers/appointment.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/appointment", createAppointment);
router.get("/appointment", authRequired, getAppointments);
router.get("/appointment/:id", getAppointmentById);
router.put("/appointment/:id", authRequired, updateAppointmentById);
router.delete("/appointment/:id", authRequired, deleteAppointmentById);

export default router;