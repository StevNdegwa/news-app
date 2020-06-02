import React from "react";
import fetch from "cross-fetch";

import {MdChevronRight,MdCancel} from "react-icons/md";
import {Control} from "../../styled-comp";
import {List, Item, PSearches, Search, NewsLoader} from "./styles";
const {searches} = require("../../../data/popular-searches.json");

class NewsList extends React.Component{
  constructor(props){
    super(props);
    this.updateArticles = this.updateArticles.bind(this);
    this.handlePopularSearchClick = this.handlePopularSearchClick.bind(this);
    this.state = {articles:{}, loading:false, topic:"", query:"", netError:false}
  }
  
  async componentDidMount(){
    await this.updateArticles(this.props.topic);
  }
  
  async updateArticles(topic, query){
    const {articles} = this.state;
    this.setState({topic, query});
    if((!articles[topic] || articles[topic].length === 0) || !!query){
      this.setState({loading:true,netError:false})
      try{
        const article = await getNewsArticles(topic, query);
        this.setState((state, props)=>{
          return {articles:{...state.articles, [topic]:article}, loading:false, netError:(article.length === 0)}
        });
      }catch(error){
        console.log(error)
        this.setState({loading:false})
      }
    }
  }
  
  componentWillUnmount(){
    delete this.state.articles;
    delete this.state.query;
    delete this.state.topic;
    delete this.state.loading;
  }
  
  handlePopularSearchClick(q){
    return this.updateArticles("search", q);
  }
  
  render(){
    const {articles, loading, topic, query, netError} = this.state;
    return (<>
      <List>
      {(topic === "search") && <><Item><h2><MdChevronRight size="1.5em"/>Search Results: {query}</h2></Item><hr/></>}
      {loading && <Item><NewsLoader size="50px"/></Item>}
      {netError&&<Item><Control><MdCancel size="1.5em"/>Please check your internet connection</Control></Item>}
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
      <Search><h4>Popular Searches</h4></Search>
      {searches.map((search, idx)=>{
        return (<Search key={idx} onClick={()=>this.handlePopularSearchClick(search)}>{search}</Search>)
      })}
    </PSearches>
  </>)
  }
}

async function getNewsArticles(topic, query){
  try{
    var url;
    switch(topic){
      case "topnews":
        url = "http://localhost:7000/news/articles/topnews";
        break;
      case "search":
        query = encodeURI(query);
        url = `http://localhost:7000/news/articles/search?query=${query}`;
        break;
      default:
        url = `http://localhost:7000/news/articles/topics?to=${topic}`;
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