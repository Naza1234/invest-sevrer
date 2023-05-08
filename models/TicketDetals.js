const mongoose=require('mongoose')

const TicketsSchema= mongoose.Schema (
    {
        
         UserName: {
            type : String,
            require: false
         },
         UserEmail: {
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