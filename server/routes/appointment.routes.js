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
import { createAppointmentSchema, updateAppointmentSchema } from "../schemas/appointment.schemas.js";

const router = Router();

router.post("/appointment", validateSchema(createAppointmentSchema), createAppointment);
router.get("/appointment", authRequired, getAppointments);
router.get("/appointment/:id", getAppointmentById);
router.put("/appointment/:id", validateSchema(updateAppointmentSchema), updateAppointmentById);
router.delete("/appointment/:id", authRequired, deleteAppointmentById);

export default router;