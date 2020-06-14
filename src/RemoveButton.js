import React,{useContext} from 'react'
import { BookContext } from './BookContext'


const RemoveButton = ({bookID}) => {
    // eslint-disable-next-line
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
