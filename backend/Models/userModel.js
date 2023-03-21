const mongoose = require('mongoose');
const userSchema=mongoose.Schema(
    {
       name: {
        type:String , trim:true,required:true
       },
       email: {
        type:String , trim:true,required:true,unique:true
       },
       password: {
        type:String , trim:true,required:true
       },
       picture: {
        type:String , trim:true,default:'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'
       }
    }, {timestamps:true}
)

const User = mongoose.model('User', userSchema);
module.exports= User; 