const User=require('../model/auth');

const register=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        if(name && email &&password){
            const isAlreadyPresent=await User.findOne({email:email})
            if(isAlreadyPresent){
                return res.status(200).json({message:'User already exist',status:false})
            }
            const response=new User({name,email,password});
            const register =await response.save()
                if(register){
                    return res.status(200).json({message:register,status:true})
                }
                else{
                    return res.status(500).json({message:'unabled to register',status:false})
                }

        }
        else{
            return res.status(200).json({message:'given information is incomplete'})
        }
        
    } catch (error) {
        return res.status(500).json({message:error})
    }
}
const login=async(req,res,next)=>{
    const {email,password}=req.body;
    let isEmail;
    let isPass;
    if(email===''){
        return res.status(200).json({message:'email is missing',status:false})
    } 
    if(password===''){
        return res.status(200).json({message:'password is missing',status:false})
    } 
    try {
        isEmail=await User.findOne({email:email});
        isPass=await User.findOne({password:password})
        
        if(isEmail){
            if(isPass){
                return res.status(200).json({message:isEmail,status:true})

            }
            return res.status(200).json({message:'Password is wrong!!',status:false})
        }
        console.log('yaha')
        return res.status(200).json({message:'Email not found !!',status:false})
    } catch (error) {
        return res.status(200).json({message:error,status:false})
    }
   
   
}
const test=(req,res)=>{
    res.send('hello batiyalo')
}
const getUsers= async(req,res)=>{



    try{
         const  getList=await User.findById(req.params.userId)
         

         return res.status(200).json({message:getList})
    } catch (error) {
        return res.status(200).json({message:error,status:false})
    }

}
// get all user except me
const getAllUser= async(req,res)=>{
    try {
    const users=await User.find({});
    
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.login=login;
exports.register=register
exports.getUsers=getUsers
exports.getAllUser=getAllUser
exports.test=test