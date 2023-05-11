const DB=require('../models/planinDetals')

exports.AddPlanin= async (req,res)=>{
    try {
        

        const data=await DB.create(req.body)

        res.status(200).json(data)

        
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}

exports.GetAllPlanin=async (req,res)=>{
    try {
        
        const data=await DB.find({})
        
        res.status(200).json(data)



    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}



exports.GetSingleplanin=async (req,res)=>{
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


exports.UpdateSinglePlanin=async (req,res)=>{
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


exports.DeleteSingleplanin=async (req,res)=>{
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