import { Router } from "express";
import {
  signup,
  signin,
  resetPassword,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { signupSchema, signinSchema } from "../schemas/auth.schemas.js";

const router = Router();

router.post("/signup", validateSchema(signupSchema), signup);
router.post("/signin", validateSchema(signinSchema), signin);
//reset password
router.post("/reset-password", resetPassword);
router.post("/logout", logout);
// Route protected by authRequired middleware 
router.get("/profile", authRequired, profile);

export default router;
