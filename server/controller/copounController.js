const Copoun = require('../model/copoun.js')
const responsemsgs = require('../utilities/responseMsgs.js')
const responce = require('../utilities/httpresponemsg.js')
const addcopoun = async(req,res)=>{
    let data = await req.body
    let newcopoun = await new Copoun({
        copounName:data.copounName,
        copounCategory: data.copounCategory,
      copounPercent:data.copounPercent,
        copounExpire:data.copounExpire
    })
    let done = newcopoun.save()
    if(!done){
        responce(res,400,responsemsgs.FAIL,"can't save new copoun",null)
        
    }
    else{
        responce(res,200,responsemsgs.SUCCESS,"copoun is Successfully",null)
    }
    res.end()
}
const deletecopoun = async(req,res)=>{
    let pid = await req.params.id
   let findcopoun = await Copoun.find({_id:pid})
    if(findcopoun.length ==0){
        responce(res,404,responsemsgs.FAIL,"Copoun Not Found",null)
      
    }
    else{
        let delete1 = await Copoun.deleteOne({_id:pid});
        if(delete1.deletedCount ==0) {
            responce(res,400,responsemsgs.FAIL,'Nothing deleted',null)
        } else{
            responce(res,200,responsemsgs.SUCCESS,"delete Successfully",null)
    }   
}
res.end()
}
const getallCopoun = async (req,res)=>{
    let allcopoun = await Copoun.find({})
    responce(res,200,responsemsgs.SUCCESS,allcopoun,null)
    res.end()
}
const checkcopoun = async(req,res)=>{
    let data = await req.body
    let checkname = await Copoun.find({ copounName :data.copounName})
    if(checkname.length==0){
        responce(res,400,responsemsgs.FAIL," copoun name is  not found",null)
    }
    else{
        let datenow =Date.now()
        if(Date.parse(checkname[0].copounExpire) < datenow){
            responce(res,200,responsemsgs.SUCCESS,"Copoun Is Expired",null)
          
        }
        else {
            if(data.copounCategory !=  checkname[0].copounCategory){
                responce(res,400,responsemsgs.FAIL,"Copoun is Not Valid For This Category",null)
               
            }
            else{
                responce(res,200,responsemsgs.SUCCESS,"Copoun is Availbale",{precent:checkname[0].copounPercent})
            }
        }
    }
res.end()
}
module.exports ={addcopoun ,deletecopoun ,getallCopoun ,checkcopoun}