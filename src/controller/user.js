import fs from "fs";
import path from "path";
let users=JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'model', 'users.json')));
export const getUser=(req,res)=>{
   if(!users.find(u=>u.id==req.params.id)){
      res.send(users);
      return;
   }
   const User=users.find(u=>u.id==req.params.id)
  res.send(User)
};
export const postUser=(req,res)=>{
   const {name, age}=req.body;
 if(users.some((u)=>u.name==name&&u.age==age))return res.send("ushbu user ro'yhatda bor !");
 const id = users.at(-1)?.id+1||1;
users.push({id:id, name, age});
fs.writeFileSync(path.join(process.cwd(), 'src', 'model', 'users.json'), JSON.stringify(users, null,4))
res.send(users);
};
export const putUser=(req,res)=>{
if(!req.params)return res.send('id is not defined');
   res.send(req.params);
};
export const deleteUser=(req,res)=>{
   console.log(req.params);
   return res.send('delete')
};


// [
//    {
//        "id":1,
//        "name":"Alex",
//        "age":20
//    }
// ]