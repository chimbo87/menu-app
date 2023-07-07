import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true,
        
    },
    image:{
        data:Buffer,
        type:String,
        required:false
    }
},{
    timestamps: true
});

const blog = mongoose.model('Blog',blogSchema);
export default blog;