import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true,
        
    },
    price:{
        type: Number,
        required:true
    },
    image:{
        type:String,
        required:false
    }
},{
    timestamps: true
});

const product = mongoose.model('Product',productSchema);
export default product;