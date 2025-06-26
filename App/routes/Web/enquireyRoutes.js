const {insertenquery, getenquirey, deleteenquirey, updateenquirey} = require('../../Controllers/Web/UserEnquireyController');
let express=require('express')
let enqueryRoutes=express.Router()
enqueryRoutes.post('/api/enquiry-insert',insertenquery)
//get the data
enqueryRoutes.get('/api/get',getenquirey)
//delete api
enqueryRoutes.delete('/api/delete/:id',deleteenquirey)
//update api
enqueryRoutes.put('/api/update/:id',updateenquirey)

module.exports={enqueryRoutes}