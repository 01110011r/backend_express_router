import express from "express";
const app=express();
import {userRouter}  from "./router/user.router.js";
import { errorHendlorMiddleware } from "./middleware/middleware.js";
app.use(express.json())
app.use(userRouter);
app.use(errorHendlorMiddleware);
app.listen(7000, console.log("done"));