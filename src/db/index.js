import mongoose from "mongoose";
const shoeSchema= new mongoose.Schema({
    
    title: {type: String},
    image: {type: String},
    description: {type: String},
    price: {type: String}

})

const Shoe= mongoose.model('shoe', shoeSchema)

const getShoe= ()=>{
    return Shoe.find()

}

const createShoe= (values)=>{
    
    return new Shoe(values).save()
    .then((book)=>{book.toObject()})

    
}

const updateShoe= (id,value)=>{
    return Shoe.findByIdAndUpdate(id,value)
}

const deleteShoe= (id)=>{
    return Shoe.findByIdAndDelete(id)
}

export {
    Shoe,
    getShoe,
    createShoe,
    updateShoe,
    deleteShoe

}