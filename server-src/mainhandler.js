import path from "path";
import fs from "fs";
import {ServerStyleSheet} from "styled-components";

import "./globals.js";

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/app/App";

export default function mainHandler(request, response, next){
  const sheet = new ServerStyleSheet();
  try{
    const content = ReactDOMServer.renderToString(sheet.collectStyles(<App/>));
    
    const indexFile=path.resolve("./build/index.html");
    
    var html=fs.readFileSync(indexFile, "utf-8");
    html=html.replace(`<ssrstyle></ssrstyle>`, sheet.getStyleTags());
    html=html.replace(`<div id="root"></div>`, `<div id="root">${content}</div>`);
    
    return response.send(html);
    
  }catch(error){
    return next(error);
  }finally{
    sheet.seal();
  }
}