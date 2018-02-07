import React, { Component } from 'react';

import AllBooks from '../containers/all_books';

import DetailingBook from '../containers/detailing_book';

class App extends Component {

    render () {

        return (
            <div>

            <AllBooks />
            <DetailingBook />
           
            
            </div>
        );


    }

}

export default App;
