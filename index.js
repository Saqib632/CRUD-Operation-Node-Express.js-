let express=require('express');
var mongoose=require('mongoose');


const {enqueryRoutes}=require('./App/routes/Web/enquireyRoutes')
require('dotenv').config();
let app=express()
app.use(express.json())

 app.use("/web/api/enquirey",enqueryRoutes)

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connect to mongodb");
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port "+ process.env.PORT)
    })
})
