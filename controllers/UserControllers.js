const DB=require('../models/UserDetals')

exports.AddUsers= async(req,res)=>{
    try {
         
        const data=await DB.create(req.body)

        res.status(200).json(data)
      
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}

exports.GetAllUsers= async(req,res)=>{
    try {
        
       const data=await DB.find({})
        
       res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}



exports.GetSingleUsers= async (req,res)=>{
    try {
        const{id}=req.params
        const data=await DB.findById(id)
        
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.UpdateSingleUsers=async (req,res)=>{
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


exports.DeleteSingleUsers= async(req,res)=>{
    try {
        

        const{id}=req.params
        const data=await DB.findOneAndDelete(id)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}