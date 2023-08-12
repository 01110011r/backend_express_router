import {Router} from "express";
import {deleteUser, getUser, postUser, putUser} from "../controller/user.js";
import { middleware} from "../middleware/middleware.js";
export const userRouter=Router();
userRouter.get('/users/:id', getUser)
userRouter.post('/users', middleware, postUser);
userRouter.put('/users/:id', middleware, putUser);
userRouter.delete('/users/:id', deleteUser);