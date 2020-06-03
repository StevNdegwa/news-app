import express from "express";

import logger from "morgan";

import getNewsHandler from "./getnewshandler";
import mainHandler from "./mainhandler";

const app=express();
app.use(logger("combined"));

app.get("/news/articles/:category", getNewsHandler)
app.get("/:page", mainHandler);
app.get("/", mainHandler);

app.use(express.static("build"));

app.use((error,request,response,next)=>{
  console.error(error);
  return response.status(500).json({message:"Currently Unavailable"})
})

app.listen(7000, ()=>{
  console.log("Listening to port 7000");
})