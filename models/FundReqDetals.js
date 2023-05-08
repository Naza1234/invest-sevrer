const mongoose=require('mongoose')

const FundReqSchema= mongoose.Schema (
    {
        SendersName: {
           type:String,
           require:false
        },
         PaymentMethod: {
            type : String,
            require: false
         },
         TrackingID: {
            type : String,
            require: false
         },
         PaymentDescription: {
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

const Fund=mongoose.model('Fund',FundReqSchema)

module.exports = Fund