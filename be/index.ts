import express from "express";
import { middleware } from "./middleware";

const app = express();

app.use(express.json());

app.post("/auth/signup",(req,res)=>{

})
app.post("/auth/signin",(req,res)=>{

})
app.post("projects",middleware,async(req,res)=>{

})
export default app;
