import path from "path";
import fs from "fs";
import {ServerStyleSheet} from "styled-components";

import "./globals.js";

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/app/App";

export default function mainHandler(request, response, next){
  const styles = new ServerStyleSheet();
  try{
    const content = ReactDOMServer.renderToString(styles.collectStyles(<App/>));
    const indexFile=path.resolve("./build/index.html");
    
    var doc = fs.readFileSync(indexFile, "utf-8");
    var html = Html({
      inlineStyles:styles.getStyleTags(), 
      links:doc.match(/(<link .*?>)/g).join("\n"), 
      body:`<div id="root">${content}</div>`, 
      scripts:doc.match("<script.*>.*</script>").join("\n")
    })
    
    return response.send(html);
    
  }catch(error){
    return next(error);
  }finally{
    styles.seal();
  }
}

const Html = ({inlineStyles, links, body, scripts})=>{
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Get all the latest news"/>
        <title>Your Favourite News Application</title>
        ${links}
        ${inlineStyles}
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        ${body}
        ${scripts}
      </body>
    </html>
  `;
}