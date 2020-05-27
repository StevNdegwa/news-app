import path from "path";
import fs from "fs";

import express from "express";

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/app/App";

//setup a value for window object 
const domino=require("domino");
const indexFile=path.resolve("../build/index.html");
const template=fs.readFileSync(indexFile).toString();
const winObj=domino.createWindow(template);
global['window']=winObj;
global['document']=winObj.document;

const app=express();

app.use(express.static("./build"));

app.get("/", (request, response)=>{
	const content = ReactDOMServer.renderToString(<App/>);

	fs.readFile(indexFile, "utf-8", (err, data)=>{
		if(err){
			console.error(err);
			return response.status(500).send("Sorry! An error occurred ");
		}

		return response.send(data.replace(`<div id="root"></div>`, `<div id="root">${content}</div>`));
	})
})
app.listen(7000, ()=>{
	console.log("Listening to port 7000");
})