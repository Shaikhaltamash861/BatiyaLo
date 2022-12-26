const Conversations=require('../model/conversation');
const newConversation=async(req,res)=>{

    
    const createConversation=new Conversations({
        members:[req.body.senderId,req.body.receiverId]
    });
    try {
        const savedConversation= await createConversation.save();
        return res.status(200).json(savedConversation)
        
    } catch (error) {
        res.status(500).json(error);
        
    }
}
const getConversation=async(req,res)=>{
    
    try {
    const conversationList=await Conversations.find({
        members:{
            $in:[req.params.userId]
        }
    })
    return res.status(200).json(conversationList);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}
exports.newConversation=newConversation;
exports.getConversation=getConversation