import React,{useContext,useState} from 'react'
import { BookContext } from './BookContext'


const RemoveButton = ({bookID}) => {
    const [books, setBooks] = useContext(BookContext)

    const updatedList = books.filter(item => {
       return item.id !== bookID
    })

    const filterBooks = ()=>{
       setBooks(updatedList)  
            }

  return (
    
      <button 
      onClick={filterBooks}
      >
      Remove
      </button>
  )
}

export default RemoveButton
