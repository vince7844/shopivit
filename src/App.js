import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from "react-router-dom";

const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>To topic 13</Link>
      <Link to={`${props.match.url}/17`}>To topic 17</Link>
      <Link to={`${props.match.url}/18`}>To topic 18</Link>
    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>TOPIC DETAIL PAGE : {props.match.params.topicId}</h1>
    </div>
  )
}

function App() {
  return (
   <div>
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
     </Switch>
   </div>
  );
}

export default App;
