import React from 'react';
import './App.css';
import {myBookList} from './myBookList'
import Book from './Book'




const App = ()=>{
  return(
    <div className="booklist">
    {myBookList.map(list=><Book {...list} key={`${list.author}key`}/>)}
    </div>
  )
}




export default App
