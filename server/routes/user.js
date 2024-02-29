import { Router } from "express";
import c from "../controllers/user.js";
const router = Router();

router.post("/", c.createUser);
router.get("/", c.getUsers);
router.post("/register", c.registerUser);
router.post("/login", c.login);
router.get("/:userId", c.getUser);

export default router;
