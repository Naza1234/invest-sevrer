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
            type : String,
            default : 0,
            require: false
         },
         UserTotalIncome: {
            type : String,
            default : 0,
            require: false
         },
         UserTotalWithdraw: {
            type : String,
            default : 0,
            require: false
         },
         UserInvestedAmount: {
            type : String,
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