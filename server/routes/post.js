import { Router } from "express";
import c from "../controllers/post.js";
const router = Router();

router.post("/", c.createPost);
router.get("/", c.getPosts);
router.get("/:postId", c.getPost);

export default router;
