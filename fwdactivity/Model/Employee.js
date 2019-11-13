const Joi = require('joi'); 
const EmployeeModel = { 
  dataModel: Joi.object().keys({ 
    email: Joi.string().required(), 
    password: Joi.string().required(), 
    token: Joi.string(), 
    firstname: Joi.string().required(), 
    lastname: Joi.string().required(), 
    nickname: Joi.string(), 
    unit: Joi.string(), 
    status: Joi.string()
  }) 
}; 
module.exports = EmployeeModel;