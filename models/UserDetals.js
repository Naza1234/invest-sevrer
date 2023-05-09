const mongoose=require('mongoose')

const UserSchema= mongoose.Schema (
    {
        
         UserName: {
            type : String,
            require: false
         },
         UserPassword: {
            type : String,
            require: false
         },
         UserEmail: {
            type : String,
            require: false
         },
         UserTotalAmount: {
            type : Number,
            default : 0,
            require: false
         },
         UserTotalIncome: {
            type : Number,
            default : 0,
            require: false
         },
         UserTotalWithdraw: {
            type : Number,
            default : 0,
            require: false
         },
         UserInvestedAmount: {
            type : Number,
            default: 0,
            require: false
         },
        
    },
    {
        timestamps: true
    }
)

const User=mongoose.model('User',UserSchema)

module.exports = User