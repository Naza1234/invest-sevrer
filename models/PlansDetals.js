const mongoose=require('mongoose')

const PlansSchema= mongoose.Schema (
    {
        
          PlansName: {
            type : String,
            require: false
         },
          PlansAmount: {
            type : String,
            require: false
         },
          InterestPerAI: {
            type : String,
            require: false
         },
         TotalInterest: {
            type : Number,
            default : 0,
            require: false
         },
        
    },
    {
        timestamps: true
    }
)

const Plans=mongoose.model('Plans',PlansSchema)

module.exports = Plans