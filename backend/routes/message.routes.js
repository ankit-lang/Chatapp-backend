import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "demy9se9a",
  api_key: "261618651343162",
  api_secret: "gsJlVB_I3I4We7BGwPRChACWTzM",
});
const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
