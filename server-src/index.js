import path from "path";
import fs from "fs";
import express from "express";

import "./globals.js";

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/app/App";

import {ServerStyleSheet} from "styled-components";

const app=express();

app.get("/", (request, response)=>{
  const sheet=new ServerStyleSheet();
  try{
    const content = ReactDOMServer.renderToString(sheet.collectStyles(<App/>));
    
    const indexFile=path.resolve("./build/index.html");
    
    var html=fs.readFileSync(indexFile, "utf-8");
    html=html.replace(`<ssrstyle></ssrstyle>`, sheet.getStyleTags());
    html=html.replace(`<div id="root"></div>`, `<div id="root">${content}</div>`);
    
    return response.send(html);
    
  }catch(error){
    
    console.error(error);
    return response.status(500).send("Sorry! An error occurred ");
    
  }finally{
    
    sheet.seal();
    
  }
})

app.use(express.static("build"));

app.listen(7000, ()=>{
  console.log("Listening to port 7000");
})