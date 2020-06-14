import React, {useContext} from 'react'
import Book from './Book'
import RemoveButton from './RemoveButton'
import {BookContext} from './BookContext'

const BooksList = ()=> {
    // eslint-disable-next-line
    const [books, setBooks] = useContext(BookContext)
    return(
        <div>
        {books.map(book => {
            return(
                <div>
                    <Book 
                        name = {book.name} 
                        price = {book.price} 
                        key={book.id}
                        />
                    <RemoveButton 
                        bookID={book.id}
                        style={{display: "inline"}}
                    />
                </div>
                )
        }
        )}
        </div>
    )
}


export default BooksList 