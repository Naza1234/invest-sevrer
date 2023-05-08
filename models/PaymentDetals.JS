const mongoose=require('mongoose')

const GetWaysSchema= mongoose.Schema (
    {
        
         GetWaysName: {
            type : String,
            require: false
         },
         GetWayAdd: {
            type : String,
            require: false
         },
         GetWayImg: {
            type : String,
            require: false
         },
    },
    {
        timestamps: true
    }
)

const GetWay=mongoose.model('GetWay',GetWaysSchema)

module.exports = GetWay