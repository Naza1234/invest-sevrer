const DB=require('../models/userIDDetails')
const multer =require('multer')
const path = require('path')
const fs = require("fs");
// const fech=require()

exports.AddUsersID= async(req,res)=>{
    try {
         const image=req.files
        
        const data={
             IDurl : `./image/${image[0].filename}`,
             IDName:req.body.fileNmae,
             User_id:req.body.user_id
        }
         await DB.create(data)
         res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}
const fileStorage=multer.diskStorage({
    destination: (req,file,cd) =>{
        cd(null,'image')
    },
    filename: (req, file, cd)=>{
        cd(null,Date.now() + path.extname(file.originalname))
    }
})
exports.uplaod=multer({
    storage:fileStorage,
     limits:{fileSize: '10000000'},
    fileFilter: (req, file, callback) => {
        const acceptableExtensions = ['png', 'jpg', 'jpeg', 'jpg']
        if (!(acceptableExtensions.some(extension => 
            path.extname(file.originalname).toLowerCase() === `.${extension}`)
        )) {
            return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`))
        }
        callback(null, true)
    }
}).any()




exports.GetAllUsersID= async(req,res)=>{
    try {
        
       const data=await DB.find({})
        
       res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}



exports.GetSingleUsersID= async (req,res)=>{
    try {
        const{id}=req.params
        const data=await DB.findById(id)
        const imagePath = data.IDurl;
        // Read the image file
        const imageBuffer = fs.readFileSync(imagePath);
        
        // Convert the image buffer to a data URI
        const dataURI = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;
        data.IDurl=dataURI
        
         res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
          console.log( data.IDurl);
    }
}


exports.UpdateSingleUsersID=async (req,res)=>{
    try {
        

        const{id}=req.params
        const data=await DB.findByIdAndUpdate(id,req.body)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.DeleteSingleUsersID= async(req,res)=>{
    try {
        

        const{id}=req.params
        const data=await DB.findByIdAndDelete(id)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}