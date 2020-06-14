import React, {useState, createContext} from "react"
import BooksData from './BooksData' 

export const BookContext = createContext()

export const BookProvider = (props)=> {
    
    const [books , setBooks] = useState(BooksData)
    
    return(
            <BookContext.Provider value={[books, setBooks]}>
                {props.children}
            </BookContext.Provider>
    )
}