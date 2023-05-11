const DB=require('../models/WithReqDetals')

exports.AddWith=async (req,res)=>{
    try {
        

  
        const data=await DB.create(req.body)

        res.status(200).json(data)

        
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}

exports.GetAllWith=async (req,res)=>{
    try {
        
        const data=await DB.find({})
        
        res.status(200).json(data)



    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}



exports.GetSingleWith=async (req,res)=>{
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


exports.UpdateSingleWith=async (req,res)=>{
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


exports.DeleteSingleWith=async (req,res)=>{
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