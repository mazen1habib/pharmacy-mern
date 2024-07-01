const {body} = require('express-validator')
let validateuser = ()=>{
    return[
        body('userName').notEmpty().withMessage("the name does not exist , please write the name"),
        body('email').isEmail().withMessage("please enter the correct email "),
        body('phone').notEmpty().withMessage('please enter you mobile phone')
    ]
}
module.exports = validateuser