import express from "express";
import { getShoe, createShoe, updateShoe, deleteShoe } from "../db/index.js"

const getAllShoes= async (req,res)=>
    {

    try{
        const allShoes=await getShoe()
        res.json(allShoes).end()
    }

    catch
        (err) {
            console.log(err)
        }
    }

const createController= async (req, res)=>{
    
    const{values}=req.body

    try {
        const newShoe= await createShoe({values})

        return res.json(newShoe).end()

    } 
    catch (err) 
    {
        console.log(err)
    }
}

const updateController= async (req,res)=>{
    const {id,userInfo}=req.params

    try {
        const updatedShoe= await updateShoe(id,userInfo)

        return res.json(updatedShoe).end()

    } 
    catch (error) {
        console.log(error)
    }
}

const deleteController= async (req,res)=>{
    const {id}=req.params

    try{

        const deletedShoe= await deleteShoe(id)

        return res.json(deletedShoe).end()

    }

    catch (error) {
        console.log(error)
    }
}

export { getAllShoes, createController, updateController, deleteController}