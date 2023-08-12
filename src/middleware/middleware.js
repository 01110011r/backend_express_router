export const middleware=(req, res, next)=>{
    const {name, age}=req.body;  
if(!name||!age)next(new Error("malumot to'liq emas!"));
      next();
};
export const errorHendlorMiddleware=(err,req,res,next)=>{
    if(err){
        res.send("Error message: "+err.message);
        console.log("Error message: "+err.message);
    } 
        next();
    };