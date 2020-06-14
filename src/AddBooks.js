import React, {useState, useContext} from 'react'
import { BookContext } from './BookContext'

const AddBooks = ()=> {

const [name, setName] = useState('')
const [price, setPrice] = useState(0)
const [books, setBooks] = useContext(BookContext)
let newId

const handleName = (e)=> {
    setName(e.target.value)
}

const handlePrice = (e)=> {
    setPrice(e.target.value)
    
}

const generateId = ()=> {
    return newId = Math.floor(Math.random() * 100000000)
}

const addBooks = (e)=> {
    e.preventDefault()
    generateId()
    name === "" ? alert("please enter book name"):
    setBooks(prevBooks => [...prevBooks, {name : name, price: `$${price}`, id: newId}])
}

    return(
        <form onSubmit={addBooks}>
            <input 
            type="text" 
            name="name" 
            value={name}
            placeholder="Enter Book name" 
            onChange={handleName}
            id="nameField"
            />

            <input 
            type="text" 
            name="price" 
            value={price}
            placeholder="Enter Book price" 
            onChange={handlePrice}
            />
            <button >Add Books</button>
        </form>
    )
}

export default AddBooks