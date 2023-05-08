const mongoose=require('mongoose')

const WithReqSchema= mongoose.Schema (
    {
        
         PaymentMethod: {
            type : String,
            require: false
         },
         AccountAdd: {
            type : String,
            require: false
         },
         Amount: {
            type : String,
            require: false
         },
         Seen: {
            type : Boolean,
            default : false,
            require: false
         },
        
    },
    {
        timestamps: true
    }
)

const With=mongoose.model('With',WithReqSchema)

module.exports = With