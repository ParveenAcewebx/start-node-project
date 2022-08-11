const _ = require("lodash");
const { User } = require("../models/user.model");
const bcrypt = require('bcrypt');
const { successHandler, errorHandler } = require("../../../helper/util.helper");
exports.login = async(req, res) => {
    try{

        let user = await User.findOne({ email: req.body.email });
        if (!user)  throw new Error("Invalid email or password."); 

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) throw new Error("Invalid email or password.");
        const token = user.generateAuthToken();
        let returnData ={
            ..._.pick(user, ["name", "_id", "email"]), token
        }
        return successHandler(res,res, returnData, 'Login successfully')
    }catch(ex){
        return errorHandler(res,res, ex)        
    }
  };
