import React, {useContext} from 'react'
import {BookContext} from './BookContext'

const navStyles = {
    backgroundColor: 'blue',
    color: 'white',
}

const Nav = ()=> {
    // eslint-disable-next-line
    const [books, setBooks] = useContext(BookContext)
    return(
        <div style={navStyles}>
        <h1 style={{display:"inline", marginRight: '300px' }}>Books List</h1>
        <p style={{display:"inline"}}>List of Books: {books.length} </p>
        </div>
    )
}


export default Nav