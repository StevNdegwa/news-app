import React from "react";
import fetch from "cross-fetch";
import {List, Item, PSearches} from "./styles";
//const {articles} = require("../../../data/sample-resp.json");

export default function NewsList({topic}){
  const [articles, setArticles] = React.useState(async ()=>{
    const a = await getNewsArticlesByTopic(topic);
    return {[topic]:a};
  });
  
  React.useEffect(()=>{
    setArticles(async (state)=>{
      if(!state[topic]){
        const a = await getNewsArticlesByTopic(topic);
        return Object.assign(state, {[topic]:a})
      }
    })
    
    return ()=>{
      setArticles({});
    }
    
  },[topic])
  
  return (<>
    <List>
      {articles[topic] && articles[topic].map((article)=>{
        return (<Item>
          <article>
            <h4><a href={article.url} target="_blank">{article.title}</a></h4>
            <p>{article.description}</p>
          </article>
        </Item>)
      })}
    </List>
    <PSearches>
    
    </PSearches>
  </>);
}

async function getNewsArticlesByTopic(topic){
  try{
    const body = await  fetch("http://localhost:7000/news/articles/topic?for="+topic, {
      method:"GET",
      headers:{
        "Accept-Charset":"utf8",
        "Content Type":"application/json"
      }
    }).then((response)=>{
      
      return response.json();
      
    })
    
    return body.articles;
    
  }catch(error){
    return [];
    
    
  }
}