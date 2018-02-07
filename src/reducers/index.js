import { combineReducers } from 'redux';

import books from './book_list';

import selectedBook from './selected_book';

const reducers = combineReducers ({

    books,
    selectedBook
    
});

//console.log(this.books)

export default reducers;