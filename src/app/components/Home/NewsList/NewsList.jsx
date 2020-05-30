import React from "react";
import fetch from "cross-fetch";
import {List, Item, PSearches, NewsLoader} from "./styles";
//const {articles} = require("../../../data/sample-resp.json");

class NewsList extends React.Component{
  constructor(props){
    super(props);
    this.updateArticles = this.updateArticles.bind(this)
    this.state = {articles:{}, loading:false}
  }
  
  async componentDidMount(){
    await this.updateArticles(this.props.topic);
  }
  
  async updateArticles(topic){
    if(!this.state.articles[topic] || !this.state.articles[topic].length === 0){ //only fetch once
      this.setState({loading:true})
      try{
        const article = await getNewsArticles(topic);
        this.setState((state, props)=>{
          return {articles:{...state.articles, [props.topic]:article}, loading:false}
        });
      }catch(error){
        console.log(error)
        this.setState({loading:false})
      }
    }
  }
  
  render(){
    const {articles, loading} = this.state;
    const {topic} = this.props;
    return (<>
      <List>
      {loading && <Item><NewsLoader size="50px"/></Item>}
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
  </>)
  }
}

async function getNewsArticles(topic){
  try{
    var url;
    if(!topic || topic === "topnews"){
      url = "http://localhost:7000/news/articles/topnews";
    }else{
      url = "http://localhost:7000/news/articles/topics?to="+topic;
    }
    const body = await fetch(url, {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    }).then((response)=>{
      return response.json();
    })
    return body.articles;
  }catch(error){
    console.log(error)
    return [];
  }
}

export default NewsList;