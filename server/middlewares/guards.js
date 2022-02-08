module.exports = {
    isAuht(){
        return (req,res,next)=>{
            if(!req.user){
                res.status(401).json({message:'Sign in'})
            }else{
                next()
            }
        }
    },
    isGuest(){
        return (req,res,next)=>{
            if(req.user){
                res.status(400).json({message:'You are already sign in.'})
            }else{
                next()
            }
        }
    },
    isOwner(){
        return (req,res,next)=>{
            const item = req.data
            if(req.user._id != item.author){
                res.status(403).json({message:'You cannot modify this record.'})
            }else{
                next()
            }
        }
    }
}