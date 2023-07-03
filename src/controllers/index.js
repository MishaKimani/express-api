import express from "express";
import { getShoe } from "../db/index.js"

const getAllShoes= async (req,res)=>{
    try{
        const allShoes=await getShoe()
        res.json(allShoes).end()
    }
    catch
        (err) {
            console.log(err)
        }
    }

export { getAllShoes }