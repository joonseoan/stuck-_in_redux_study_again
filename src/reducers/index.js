import { combineReducers } from 'redux';

import books from './book_list';

import selectedBook from './selected_book';

import imageBook from './selected_picture';

//console.log(imageBook, ".............imageBook");
// const bookData = books();
// console.log(bookData.imageBooks)

const reducers = combineReducers ({

    
    books,
    selectedBook,
    imageBook
    
});

//console.log(this.books)

export default reducers;