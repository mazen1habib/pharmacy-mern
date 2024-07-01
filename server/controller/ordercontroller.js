const placeorder = require('../model/order.js')
const user = require('../model/user.js')
const responsemsgs = require('../utilities/responseMsgs.js')
const responce = require('../utilities/httpresponemsg.js')
let addorder = async(req,res)=>{
    try{let data = await req.body
        let checkuser = await user.find({_id:data.userId})
        if(checkuser.length == 0){
            responce(res,404,responsemsgs.FAIL,"User Not Found",null)
        }
        else{
        let ppalceorder = await new placeorder({
                userId:data.userId,
                orderProduct:data.orderProduct,
                orderPrice:data.orderPrice,
                paymentType:data.paymentType,
                startDate:Date.now()
        })
     let done = ppalceorder.save()
    if(!done){
        responce(res,400,responsemsgs.FAIL,"Something Went Wrong,Please Try Again",null)
        
    } else{
        let  icrement1 = await user.updateOne({_id:data.userId},{
            $inc:{'numberOfOrders' : 1}
        })
        if(icrement1.modifiedCount !=1 ){
            responce(res,400,responsemsgs.FAIL," something went wrong",null)
           
        }
        else{
            responce(res,200,responsemsgs.SUCCESS,"Successfully Added",null)
        }
        
    }
        }
       res.end() }catch(er){
        console.log("error in server");
    }
}
let getallorder = async (req,res)=>{
   try{ let alldata = await placeorder.find({})
   responce(res,200,responsemsgs.SUCCESS,alldata,null)
   res.end()}catch(er){
    console.log("error in server");
   }
}
let singleorder =async (req,res)=>{
    try{let pid = await req.params.id
        let singleorderdata =await placeorder.find({_id:pid})
        responce(res,200,responsemsgs.SUCCESS,singleorderdata,null)
        res.end()}catch(er){
        console.log("error in server");
    }
}
let confirmorder =async (req,res)=>{
  try{  let pid = await req.params.id
    let updatedata = await placeorder.updateOne({_id:pid},{
       isDone:true
    })
    if(updatedata.modifiedCount ==0) {
        responce(res,400,responsemsgs.FAIL,'Nothing confirm',null)
    } else{
        responce(res,200,responsemsgs.SUCCESS,"Successfully confirm",null)
}
    res.end() }catch(er){console.log("error in server");}
}
let deleteorder = async (req,res)=>{
   try{ let pid = await req.params.id
    let del = await placeorder.deleteOne({_id:pid})
    if(del.deletedCount ==0) {
        responce(res,400,responsemsgs.FAIL,'Nothing deleted',null)
       
    } else{
        responce(res,200,responsemsgs.SUCCESS,"delete Successfully",null)
}
    res.end()} catch(er){
        console.log("error in server");
    }
}
module.exports= {addorder ,getallorder,singleorder ,confirmorder ,deleteorder}