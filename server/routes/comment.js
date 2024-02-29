import { Router } from "express";
import c from "../controllers/comment.js";
const router = Router();

router.post("/", c.createComment);
router.get("/", c.getComments);
router.get("/:commentId", c.getComment);

export default router;
