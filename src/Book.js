import React from 'react'





const Book = ({img,author,title})=>{
  return(
    <article className="book">
     <img src={img} alt=""/>
     <h6>{author}</h6>
     <h5>{title}</h5>
     <input type="button" value="Click me!" onClick={()=>alert(author)}/>
    </article>
  )
}


export default Book