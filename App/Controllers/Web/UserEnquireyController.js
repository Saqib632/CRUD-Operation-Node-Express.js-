let enquiryModel = require('../../models/enquirey.model')
let insertenquery=(req,res)=>{
    let {sname,semail,sphone,smessage}=req.body;

    let enquiry=new enquiryModel({
        name:sname,
        email:semail,
        phone:sphone,
        message:smessage
    })
    enquiry.save().then(()=>{
        res.send({status:1,message:"Enquiry save successfully"})
    }).catch((err)=>{
        console.error(err)
      res.send({status:0,message:"Error while saving enquirey",error:err})
    });
    
}
let getenquirey=async(req,res)=>{
    let enquirey=await enquiryModel.find()
    res.send({status:1,msg:"data fetch sucessfully",data:enquirey})
}
let deleteenquirey=async(req,res)=>{
    let id=req.params.id;
    let deletedata= await enquiryModel.deleteOne({_id:id});
    res.send({status:1,msg:"data delete sucessfully,",id:id,response:deletedata})
 
 
 }
 let updateenquirey=async(req,res)=>{
    let id=req.params.id;
    let {sname,semail,sphone,smessage}=req.body;

    
    let updatedata=await enquiryModel.updateOne({_id:id},{
        name:sname,
        email:semail,
        phone:sphone,
        message:smessage
    })
    res.send({status:1,msg:"Data sucessfullay updated",updatedata})
}
module.exports={insertenquery,getenquirey,deleteenquirey,updateenquirey}