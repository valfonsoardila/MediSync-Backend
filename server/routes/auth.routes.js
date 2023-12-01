import { Router } from "express";
import {
  signup,
  signin,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
// Route protected by authRequired middleware 
router.get("/profile", authRequired, profile);

export default router;
