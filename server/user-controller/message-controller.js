const Message=require('../model/message');
const newMessage=async(req,res)=>{
    const addMessage=new Message(req.body);
    
    try {
        const savedMessage=await addMessage.save();
        return res.status(200).json(savedMessage)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMessages=async(req,res)=>{
    try {
        const messageList=await Message.find({
            conversationId:req.params.conversationId
        })
        return res.status(200).json(messageList)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const getLastMsg=async(req,res)=>{
    
    try {
        const lastMsg= await Message.find({
           conversationId:req.params.conversationId

        })  
        lastMsg.sort((b, a) => {
            return a.createdAt - b.createdAt;
        });

        return res.status(200).json(lastMsg[0])

    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.newMessage=newMessage
exports.getMessages=getMessages;
exports.getLastMsg=getLastMsg;
