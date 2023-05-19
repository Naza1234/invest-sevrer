const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const cors = require('cors')
// const bodyParser = require('body-parser')
// // ...



// app.use(bodyParser())



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/image",express.static("./image"))


    // All Routes in this API

    const UserRoute = require("./routes/UserRoutes");
    app.use("/user",UserRoute)  

    const UserIDRoute = require("./routes/userIDRoute");
    app.use("/userid",UserIDRoute)  

    const PlanRoute = require("./routes/PlansRoute");
    app.use('/plan',PlanRoute)  

    const FundRoute = require("./routes/FundRoute");
    app.use('/fund',FundRoute)  

    const WithRoute = require("./routes/WithRoutes");
    app.use('/with',WithRoute)  

    const TicketRoute = require("./routes/TicketRoute");
    app.use('/ticket',TicketRoute)  

    const PaymentRoute = require("./routes/PaymentRoute");
    app.use('/payment',PaymentRoute)  

    const PlaninRoute = require("./routes/PlaninRoute");
    app.use('/planin',PlaninRoute)  

    const emailRoute = require("./routes/emailRoute");
    app.use('/email',emailRoute)  

    app.use("/",(req,res)=>{
        res.end('this is the home of the invest.coin server API')
      });


// data base connection

const url="mongodb+srv://InvestClude:123investcludeserver@cluster0.ra5hgdj.mongodb.net/?retryWrites=true&w=majority"

const port=3000



mongoose
.connect(url)
.then(()=>{
    console.log('since with database made');
    app.listen(port,()=>{
        console.log(`server is now running on ${port} `);
    })
}).catch((error)=>{
    console.log(error.message);
})