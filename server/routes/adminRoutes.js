const express = require('express')
const admincontroller = require('../controller/admincontroller.js')
const validateuser = require('../middleware/validatedadmin.js')
const router = express.Router()
router.route('/admin/Register').post(validateuser(),admincontroller.addadmin)
router.route('/admin/login').post(admincontroller.adminlogin)
router.route('/admin/restpassword').post(admincontroller.restpassordcode)
router.route('/admin/update/:id').patch(validateuser(),admincontroller.updateadmin)
router.route('/admin/newpassword').patch(admincontroller.restpasswordvild)
module.exports= router

