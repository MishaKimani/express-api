import mongoose from "mongoose";
const shoeschema= new mongoose.Schema({
    
    title: {type: String},
    image: {type: String},
    description: {type: String},
    price: {type: String}

})

const shoe= mongoose.model('shoe', shoeschema)

const getShoe= ()=>{
    return shoe.find()
}

export {
    shoe,getShoe
}