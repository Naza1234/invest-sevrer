const mongoose=require('mongoose')

const WithReqSchema= mongoose.Schema (
    {
         SendersName: {
            type:String,
            require:false
         },
         PaymentMethod: {
            type : String,
            require: false
         },
         PaymentAdd:{
            type: String,
            require: false,
            default: "no address"
         },
         PaymentValue : {
            type: String,
            require: false,
            default: "no amount sent"
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