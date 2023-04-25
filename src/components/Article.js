import React from 'react'

 function Article(props) {
    const post = [
        {id:1 , title: "Components 101",preview: "Setting up the building blocks of your site",date:"December 15, 2020"},
        { id: 2, title: 'React Data Flow', date: 'December 11, 2020', preview: 'Passing props is never passé'},
        { id: 3, title: 'Function vs Class Components', preview: 'React, meet OOJS.'}

    ];
  return (
    <article>
        <h3>{props.title}</h3>
        <small>{props.date}</small>
        <p>{props.preview}</p>
    </article>
  )
}
export default Article;