import Book from './Book';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';

const [books,setBooks] = useState([{ title: "The hunger games1", author: 'aaa', likes: 1, onshelf: true, sample:"11111111"},
{ title: "The hunger games2", author: 'aaa', likes: 2, onshelf: true, sample:"222222222"},
{ title: "The hunger games3", author: 'aaa', likes: 3, onshelf: false, sample:"33333" }
])
function App2() {
            
        // <Book {...books[0]} />
        // <Book title={books.title}/>
        // <Book title={books.title}/> }
        // const listItems = books.map(book =>
        //     <li key={book.likes}>
        //         <p>
        //             <b>{book.title}</b>
        //             {' ' + book.author + ' '}
        //         </p>
        //     </li>
//   );
  return (
    <>
     <h1>my books</h1>
     <ul>
     {books.map(book => <Book {...book} />)}
        </ul>
    </>
    )

}
export default App2;