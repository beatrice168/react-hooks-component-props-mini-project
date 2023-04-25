import React from "react";
import blogData from "../data/blog";
import About from "./About";
//import Article from "./Article";
import ArticleList from "./ArticleList";
//import Article from "./Article";
//import ArticleList from "./ArticleList";
import Header from "./Header";
//import About from "./About";
console.log(blogData);

function App() {

  const name ="overreacted";
  const image = "	https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
    const logo ="blog logo"
    const about ="Personal blog by Dan Abramov. I explain with words and code."
    
  return (
    <div className="App">
      <Header name={name}/>
      <About image={image} logo={logo} about={about}/>
      <ArticleList posts={blogData.posts}/>
      
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
