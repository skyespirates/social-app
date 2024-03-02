import { Router } from "express";
import c from "../controllers/upload.js";
const router = Router();

router.post("/excel", c.uploadExcel);
router.get("/tickets/:ticketId", c.getTicket);
router.delete("/tickets/:ticketId", c.deleteTicket);
router.get("/tickets/user/:userId", c.getTicketByUser);
router.post("/pdf", c.uploadPdf);
router.post("/image", c.uploadImage);

export default router;
