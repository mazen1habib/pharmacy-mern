const Admin = require('../model/admin.js')
const bcrypt = require('bcrypt')
const responsemsgs = require('../utilities/responseMsgs.js')
const responce = require('../utilities/httpresponemsg.js')
const {validationResult}= require('express-validator')
let addadmin = async(req,res)=>{
   try{ let val = await validationResult(req).errors
    if(val.length == 0)
{
    let data = await req.body
    let hashpassword = await bcrypt.hash(data.password,5)
    let newadmin = await new Admin({
        adminName:data.adminName,
        email:data.email,
        password:hashpassword,
        phone:data.phone,
        address:data.address,
        registered:Date.now(),
        lastLogged:Date.now()
    })
   let done = newadmin.save()
   if(done){
    responce(res,200,responsemsgs.SUCCESS,"Registered Successfully",null)
} else{
    responce(res,400,responsemsgs.FAIL,"Registered Nothing Successfully",null)
}
} else
{
 let  errorr = await val.map((er)=>er.msg)
  res.json({error :[errorr]})
}
 }catch(er){
    console.log("error in server");
   }
   res.end()
   }
   let adminlogin = async (req,res)=>{
    try{let data = await req.body
        if(!data.email || !data.password){
            responce(res,400,responsemsgs.FAIL,"please enter email or password ",null)
        }
        else{
            let checkdata = await Admin.find({email:data.email})
            if(checkdata.length ==0){
                responce(res,404,responsemsgs.FAIL," email  can't be correct",null)
            }else {
                let comparepassword = await bcrypt.compare( data.password ,checkdata[0].password)
                
                if(comparepassword){
                    responce(res,200,responsemsgs.SUCCESS," welcome",null)
                }
                else{
                    responce(res,404,responsemsgs.FAIL," please enter your correct password",null)
            }
        }
    }
       res.end()}catch(er){
        console.log("error try another time later");
    }
   }
   let updateadmin = async (req,res)=>{
    try{let val = await validationResult(req).errors
        if(val.length == 0)
    {
        let pid = await req.params.id
        let newdata =await req.body 
        let hashpasswordup = await bcrypt.hash(newdata.password ,5)
        let newupdatedata = await Admin.updateOne({_id:pid},{
            adminName:newdata.adminName,
            email:newdata.email,
            password:hashpasswordup,
            phone:newdata.phone,
            address:newdata.address,
        }) 
        if(newupdatedata.modifiedCount ==0) {
            responce(res,400,responsemsgs.FAIL,'Nothing Updated',null)
        } else{
            responce(res,200,responsemsgs.SUCCESS,"updated Successfully",null)
    }}else
    {
     let  errorr = await val.map((er)=>er.msg)
      res.json({error :[errorr]})
    }
   }catch(er){
        console.log("error in server");
    }
    res.end()
   }
   let restpassordcode = async (req,res)=>{
    let inputemail = await req.body.email
    if(inputemail == 0){
        responce(res,400,responsemsgs.FAIL,"please enter your email",null)
    }
    else{
        let checkemail = await Admin.find({email:inputemail})
        if(checkemail.length ==0){
            responce(res,400,responsemsgs.FAIL,"User Not Found",null)
        }
        else{
           let  rademcode = await Math.round(Math.random()*10000)
           let newradem = await Admin.updateOne({email:checkemail[0].email},{
                restPassword:rademcode
            })
            if(newradem.modifiedCount ==0) {
                responce(res,400,responsemsgs.FAIL,'Nothing Updated',null)
            } else{
                responce(res,200,responsemsgs.SUCCESS,"Code Sent In Your Email",rademcode)
            }
        }
    }
    res.end()
   }
   let restpasswordvild = async(req,res)=>{
   try{ let data = await req.body
    if(!data.email || !data.password || !data.code){
        responce(res,400,responsemsgs.FAIL,"please enter your email,password or code",null)
    }
    else{
       let  checkadmin = await Admin.find({email:data.email})
       if(checkadmin.length ==0){
        responce(res,400,responsemsgs.FAIL,"email not found",null)
       }
       else{
            if(checkadmin[0].restPassword != data.code ){
                responce(res,400,responsemsgs.FAIL,"code not found",null)
               
            }
            else {
                let hashpassworvild = await bcrypt.hash(data.password ,5)
                let updatepassword = await Admin.updateOne({email:data.email},{
                    password: hashpassworvild
                })
                if(updatepassword.modifiedCount!=1) {
                    responce(res,400,responsemsgs.FAIL,'Nothing Updated',null)
                }
                else{
                    responce(res,200,responsemsgs.SUCCESS,"updated your password",null)
                let daleterest = await Admin.updateOne({_id: checkadmin[0]._id},{
                                restPassword:null
                            })
                        }

            }
       }
    }
    res.end()}catch(er){
    console.log("error in server");
   }
   }
   module.exports=
   {addadmin,
    adminlogin ,
updateadmin , 
restpassordcode ,
restpasswordvild
   }