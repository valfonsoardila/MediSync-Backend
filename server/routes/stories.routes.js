import { Router } from "express";
import {
    createStory,
    getStories,
    getStoryById,
    updateStoryById,
    deleteStoryById
} from "../controllers/stories.controller.js";

const router = Router();

// /api/stories
router.post("/stories", createStory);
router.get("/stories", getStories);
router.get("/stories/:id", getStoryById);
router.put("/stories/:id", updateStoryById);
router.delete("/stories/:id", deleteStoryById);

export default router;