const mongoose=require('mongoose')

const TicketsSchema= mongoose.Schema (
    {
         SendersName: {
            type:String,
            require:false
         },
         Subject: {
            type : String,
            require: false
         },
         Email: {
            type : String,
            require: false
         },
         Message: {
            type : String,
            require: false
         },
         Seen: {
            type : Boolean,
            default: false,
            require: false
         },
        
    },
    {
        timestamps: true
    }
)

const Tickets=mongoose.model('Tickets',TicketsSchema)

module.exports = Tickets