const express = require('express')
const Router  = express.Router()
const copouncontroller = require('../controller/copounController')
Router.route("/copoun/add").post(copouncontroller.addcopoun)
Router.route("/copouns").get(copouncontroller.getallCopoun)
Router.route("/checkcopoun").post(copouncontroller.checkcopoun)
Router.route("/copoun/delete/:id").delete(copouncontroller.deletecopoun)
 module.exports= Router
