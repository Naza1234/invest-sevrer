const mongoose=require('mongoose')

const PlaninSchema= mongoose.Schema (
    {
         UserID: {
            type:String,
            require:false
         },
         PlanID: {
            type : String,
            require: false
         }
    },
    {
        timestamps: true
    }
)

const planin=mongoose.model('planin',PlaninSchema)

module.exports = planin