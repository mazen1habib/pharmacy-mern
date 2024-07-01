const product = require('../model/product.js')
const responsemsgs = require('../utilities/responseMsgs.js')
const responce = require('../utilities/httpresponemsg.js')
const { validationResult } = require('express-validator')
 let addproduct = async(req,res)=>{
  try
  {
    
    let val = await validationResult(req).errors
    console.log(val);
    if(val.length == 0)
    {
      // let path = image.destination +  image.filename
      let imagespath = await req.files
     let  mean = imagespath.imagemean[0]
     let mean1 = "http://localhost:5000/" + mean.destination + mean.filename
      let imgesall = imagespath.images
      let images = imgesall.map((e)=>{
        let p  = "http://localhost:5000/" + e.destination +  e.filename
        return p 
      })
      
   let newProductData = await req.body
    let newProduct = await new product({
     productName:newProductData.productName,
     productPrice:newProductData.productPrice,
     productDescription:newProductData.productDescription,
     productQuantity:newProductData.productQuantity,
     productCategory:newProductData.productCategory,
     imagemean: mean1,
     images:images
    })
    newProduct.save()
    responce(res,200,responsemsgs.SUCCESS,"succefully added",null)
  }
  else
  {
   let  errorr = await val.map((er)=>er.msg)
    res.json({error :[errorr]})
  }
  }
    catch(er)
    {
    console.log(er);
  }
  res.end()
 }
 let getallproduct = async (req,res)=>{
   try{ let allproduct = await product.find({})
   responce(res,200,responsemsgs.SUCCESS,allproduct,null)
   res.end} catch(er){
    console.log("error in server");
   }
 }
 let findproduct = async(req,res)=>{
  
  try{ let allproduct = await product.find({productName : {$regex:`/[A-Z] ${req.query.search}/`} })
  responce(res,200,responsemsgs.SUCCESS,allproduct,null)
  res.end} catch(er){
   console.log("error in server");
  }
 }
 let singleproduct =async (req,res)=>{
   try{ let pid =  req.params.id
    let singlepro = await product.find({_id:pid})
    responce(res,200,responsemsgs.SUCCESS,singlepro,null)
    res.end()}catch(er){
    console.log("error inserver");
   }
 }
 let updateproduct  =async (req,res)=>{
   try { let pid = await req.params.id
    let val = await validationResult(req).errors
    if(val.length == 0)
    {
    let newproduct = await req.body 
    let updatepro = await product.updateOne({_id:pid},{
        productName:newproduct.productName,
        productPrice:newproduct.productPrice,
        productDescription:newproduct.productDescription,
        productQuantity:newproduct.productQuantity,
        productCategory:newproduct.productCategory,
    })
    if(updatepro.modifiedCount ==0) {
        responce(res,400,responsemsgs.FAIL ,'Nothing Updated',null)
       
    } else{
        responce(res,200,responsemsgs.SUCCESS ,"update Successfully",null)
}
}
else
{
 let  errorr = await val.map((er)=>er.msg)
  res.json({error :[errorr]})
}
    
}catch(er){
    console.log("error in server");
   }
   res.end()
 }
 let deleteproduct = async (req,res)=>{
   try{ let pid  = await req.params.id
    let del = await product.deleteOne({_id:pid})
    if(del.deletedCount ==0) {
        responce(res,400,responsemsgs.FAIL ,'Nothing deleted',null)
    } else{
        responce(res,200,responsemsgs.SUCCESS ,"delete Successfully",null)
}
    res.end()} catch(er){
        console.log("error in server");
    }
 }
 module.exports={
    addproduct,
    getallproduct,
    singleproduct,
    updateproduct,
    deleteproduct,findproduct
 }