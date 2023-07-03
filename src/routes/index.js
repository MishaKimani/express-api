import express from "express";
import {getAllShoes} from "../controllers/index.js"

const router=express.Router()

router.get('/',getAllShoes)

export default router