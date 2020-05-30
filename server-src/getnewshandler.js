import fetch from "cross-fetch";
import regeneratorRuntime from "regenerator-runtime";

export default async function getNewsHandler(request, response, next){
  const {category} = request.params;
  if(category){
    try{
      var news;
      switch(category){
        case "topics":
          const {to} = request.query;
          news = await fetchTopics(to);
          break;
        default:
          news = await fetchTopNews();
      }
      return response.json(news);
    }catch(error){
      return next(error);
    }
    
  }else{
    return response.json({message:"Invalid Request"})
  }
}

function fetchTopics(topic){
  return fetch(`https://gnews.io/api/v3/topics/${topic}?token=e44696b883dc0684501c463c4bf8c5a9`, {method:"GET"})
  .then((response)=>{
    
    return response.json();
    
  })
}

function fetchTopNews(){
  return fetch(`https://gnews.io/api/v3/top-news?token=e44696b883dc0684501c463c4bf8c5a9`, {method:"GET"})
  .then((response)=>{
    
    return response.json();
    
  })
}