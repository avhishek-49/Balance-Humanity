import express from "express";
const router = express.Router();
import{createAbilty} from "./index.js";



router.post("/",createAbilty)


export default router;