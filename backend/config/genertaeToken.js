const jwt = require ('jsonwebtoken');

const generateToken=(id)=>{
    return jwt.sign({id},'lazmi', {
        expiresIn:'30d',
    });

    
}
module.exports= generateToken;