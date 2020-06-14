import React from 'react';
import BooksList from './BooksList'
import Nav from './Nav'
import AddBooks from './AddBooks'
import {BookProvider} from './BookContext'
import './App.css';

function App() {
  return (
      <BookProvider>
        <div className="App">  
            <Nav />
            <AddBooks />
            <BooksList />
          </div>
      </BookProvider>
  );
}

export default App;
