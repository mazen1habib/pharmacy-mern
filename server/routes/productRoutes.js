const productcontroller =require('../controller/productcontroller.js')
const validatedproduct = require('../middleware/validatedproduct.js')
const uploadimges = require('../utilities/productPhotos.js')
const express = require('express')
const  router = express.Router()
router.route('/products')
.post([uploadimges.fields([{ name: 'imagemean', maxCount: 1 },
{ name: 'images', maxCount: 3 }]) ,validatedproduct()],productcontroller.addproduct)
.get(productcontroller.getallproduct)
router.route('/product/:search').get(productcontroller.findproduct)
router.route('/products/:id')
.get(productcontroller.singleproduct)
.patch(validatedproduct(),productcontroller.updateproduct)
.delete(productcontroller.deleteproduct)

module.exports=router
// validatedproduct(),