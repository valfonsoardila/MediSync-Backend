import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import diseasesRouter from "./routes/diseases.routes.js";
import specialtiesRouter from "./routes/specialties.routes.js";
import appointmentRouter from "./routes/appointment.routes.js";
import storiesRouter from "./routes/stories.routes.js";
import doctorRouter from "./routes/doctor.routes.js";
import patientRouter from "./routes/patient.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api",authRouter);
app.use("/api",diseasesRouter);
app.use("/api",specialtiesRouter);
app.use("/api",appointmentRouter);
app.use("/api",storiesRouter);
app.use("/api",doctorRouter);
app.use("/api",patientRouter);

export default app;