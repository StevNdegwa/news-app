import React from "react";

import {MdAdd} from "react-icons/md";

import Header from "../Header";
import {Topics, Topic, SelectTopic, TopicOption,Content} from "./styles";

const {list} = require("../../data/topics.json");

export default function Home(){
  const [topics, changeTopics] = React.useReducer(topicsReducer, [])
  const [showList, setShowList] = React.useState(false)
  return (<>
    <Header/>
    <Topics>
      <div style={{display:"flex"}}>
        <Topic onClick={()=>setShowList(l=>!l)}><MdAdd size="1.5em"/></Topic>
        <Topic>Top News</Topic>
        {topics.map((t,idx)=>{
          return (<Topic key={idx} onDoubleClick={()=>changeTopics({type:"remove", topic:t})} title="Double click to remove">
            {t}
          </Topic>);
        })}
      </div>
    </Topics>
    <Content>
      {showList && <SelectTopic>
        {list.map((l)=>{
          return (<TopicOption key={l.key} onClick={()=>{changeTopics({type:"add", topic:l.label}); setShowList(l=>!l)}}>
            {l.label}
          </TopicOption>)
        })}
        </SelectTopic>
      }
    </Content>
  </>);
}

function topicsReducer(state, action){
  switch(action.type){
    case "add":
      if(!state.includes(action.topic)){
        return [...state, action.topic];
      }else{
        return state;
      }
      break;
    case "remove":
      return state.filter((t)=>(t !== action.topic));
      break;
    default:
      return state;
  }
}