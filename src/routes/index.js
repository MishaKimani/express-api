import express from "express";
import {getAllShoes, createController, updateController, deleteController} from "../controllers/index.js"

const router=express.Router()

router.get('/',getAllShoes)
router.post('/create',createController)
router.put('/update:id',updateController)
router.delete('/delete:id',deleteController)


export default router