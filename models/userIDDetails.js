const mongoose=require('mongoose')

const UserIDSchema= mongoose.Schema (
    {
        
         IDurl: {
            type : String,
            require: false
         },
         IDName: {
            type : String,
            require: false
         },
         User_id: {
            type : String,
            require: false
         },
    },
    {
        timestamps: true
    }
)

const UserID=mongoose.model('Userid',UserIDSchema)

module.exports = UserID