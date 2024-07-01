const user = require('../model/user.js')
const bycrpt = require('bcrypt')
const responsemsgs = require('../utilities/responseMsgs.js')
const responce = require('../utilities/httpresponemsg.js')
const { validationResult } = require('express-validator')
 let adduser = async(req,res)=>{
    try{  let val = await validationResult(req).errors
        if(val.length == 0)
    {
        let newdata1 = await req.body
        let hashpassword = await bycrpt.hash(newdata1.password,5)
        let newdatauser = await new user({ 
            userName:newdata1.userName,
            email:newdata1.email,
            password:hashpassword,
            phone:newdata1.phone,
            address:newdata1.address,
            creditCard:newdata1.creditCard,
            registered:Date.now(),
            lastLogged:Date.now()
        })
        let done = newdatauser.save()
        if(done){
            responce(res,200,responsemsgs.SUCCESS,"Registered Successfully",null)
        } else{
            responce(res,401,responsemsgs.FAIL,"Registered Nothing Successfully",null)
        }
    }  else
    {
     let  errorr = await val.map((er)=>er.msg)
      res.json({error :[errorr]})
    }
        } catch(er){
            console.log("Error in Server");
        }
        res.end()
 }
 let updateuser = async (req,res)=>{
    try{let val = await validationResult(req).errors
        if(val.length == 0)
    {
        let pid = await req.params.id
        let newdata = await req.body
        let hashpasswordup = await bycrpt.hash(newdata.password,5)
        let newuser = await user.updateOne({_id:pid},{
            userName:newdata.userName,
            email:newdata.email,
            password:hashpasswordup,
            phone:newdata.phone,
            address:newdata.address,
            numberOfOrders:newdata.numberOfOrders,
            creditCard:newdata.creditCard,
        })
        if(newuser.modifiedCount ==0) {
            responce(res,400,responsemsgs.FAIL,'Nothing Updated',null)
        } else{
            responce(res,200,responsemsgs.SUCCESS,"updated Successfully",null)
    }
}  else
{
 let  errorr = await val.map((er)=>er.msg)
  res.json({error :[errorr]})
}
   }catch(er){
        console.log("error in server ");
    }
    res.end()
}
let restPasswordCode = async(req,res)=>{
    try{let useremail = await req.body.email
        if(useremail ==false){
            responce(res,400,responsemsgs.FAIL,"please enter your email",null)
        }
        else{
            let checkemail = await user.find({email:useremail})
            if(checkemail.length==0){
                responce(res,404,responsemsgs.FAIL,"User Not Found",null)
            }else
            {
                let redamrest =await Math.round(Math.random()*1000)
                let rest = await user.updateOne({email:useremail},{
                    restPassword:redamrest
                })
                if(rest.modifiedCount ==0) {
                    responce(res,401,responsemsgs.FAIL,'Nothing Updated',null)
                   
                } else{
                    responce(res,200,responsemsgs.SUCCESS,"Code Sent In Your Email" ,redamrest)
                }
        }
       
    }
    res.end()}catch(er){
        console.log("error in server");
    }
}
let userlogin = async (req,res)=>{
    try
    {
        let credentials=await req.body
        if(!credentials.email || !credentials.password ){
            responce(res,401,responsemsgs.FAIL,"please enter email or password ",null)
        } else {
            let checkuser= await user.find({email:credentials.email})
            if(checkuser.length == 0 ){
                responce(res,404,responsemsgs.FAIL,"User Not Found",null)
                
            } else {
                let checkpassowrd =await bycrpt.compare(credentials.password , checkuser[0].password)
                if(checkpassowrd != 1){
                    responce(res,400,responsemsgs.FAIL,"Missing password",null)
                }
                else{
                    responce(res,200,responsemsgs.SUCCESS,"welcome",null)
                }
                // ***or 
                // if( checkuser[0].restPassword == credentials.password || checkuser[0].password == credentials.password){
                //     res.json({masg:"welcome"})
                //     console.log(checkuser);
                //     if(checkuser[0].restPassword){
                //         let daleterest = await user.updateOne({_id: checkuser[0]._id},{
                //             restPassword:null
                //         })
    
                //     }
                // }
                // else{
                   
                //     res.json({masg:"Missing password"})
                // }
            }
        }
      res.end()
    }
catch(er)
    {
        console.log("Error in Server");
    }
}
let restPasswordvild = async(req,res)=>{
   try{ let data = await req.body
    if(!data.email|| !data.code || !data.password){
        responce(res,400,responsemsgs.FAIL,"please enter your email or passowrd or code",null)
    
    }
    else{
        let checkuser = await user.find({email:data.email})
        if(checkuser.length == 0){
            responce(res,404,responsemsgs.FAIL,"your email not correct",null)
        } else {
            if(data.code != checkuser[0].restPassword){
                responce(res,404,responsemsgs.FAIL,"your code not correct",null)
            }
            else{
                let hashpassordvild = await bycrpt.hash(data.password ,5)
                let newpassword = await user.updateOne({_id:checkuser[0]._id},{
                    password: hashpassordvild
                })
                if(newpassword.modifiedCount!=1) {
                    responce(res,400,responsemsgs.FAIL,"Nothing updated",null)
                }
                else{
                    responce(res,200,responsemsgs.SUCCESS,"updated your password",null)
                let daleterest = await user.updateOne({_id: checkuser[0]._id},{
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
  {
    adduser,
   updateuser,
    restPasswordCode,
    userlogin,
    restPasswordvild
 }
