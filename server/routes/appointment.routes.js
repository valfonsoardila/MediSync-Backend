import { Router } from "express";
import {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointmentById,
    deleteAppointmentById,
} from "../controllers/appointment.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { appointmentSchema } from "../schemas/appointment.schemas.js";

const router = Router();

router.post("/appointment", validateSchema(appointmentSchema), createAppointment);
router.get("/appointment", authRequired, getAppointments);
router.get("/appointment/:id", getAppointmentById);
router.put("/appointment/:id", validateSchema(appointmentSchema), updateAppointmentById);
router.delete("/appointment/:id", authRequired, deleteAppointmentById);

export default router;