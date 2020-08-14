var Validator = require("validator");
var isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    console.log('data',data);

    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    // validator function always validates only strings

    data.name = !isEmpty(data.name)?data.name:'';
    data.email = !isEmpty(data.email)?data.email:'';
    data.password = !isEmpty(data.password)?data.password:'';
    data.password2 = !isEmpty(data.password2)?data.password2:'';

    // validators checks

    //name check
    if(Validator.isEmpty(data.name)){
        errors.name="Enter Name field,Required";
    }

    //email check
    if(Validator.isEmpty(data.email)){
        errors.email="Enter email field,Required";
    }
    else if(!Validator.isEmail(data.email)){
        errors.email="Enter a valid email";
    }

    //password check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field,Required";
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password field,Required";
    }
    if(!Validator.isLength(data.password,{min:6,max:30})){
        errors.password="Password must be 6 characters atleast";
    }
    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = "Both the password should match";
    }

    return {errors,isValid :isEmpty(errors)};

}
