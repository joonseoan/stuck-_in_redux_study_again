import React, { Component } from 'react';

import AllBooks from '../containers/all_books';

import DetailingBook from '../containers/detailing_book';

import SearchBar from './search_bar';

class App extends Component {

    constructor (props) {

        super(props)

        this.state = { term : ''}
       // console.log(this.state.term, "term...")

    }

    programming () {

        console.log(this.state.term, '.....stateTERM')

        switch (this.state.term) {
        
        case '':
        return (
            <div>
                <h1>Start Your Search</h1>
            </div>
        )
        
        case 'programming':
        return (
                <div>
                <AllBooks/>
                <DetailingBook />
                </div>
            );

        case "Programming":
        return (
            <div>
                <AllBooks/>
                <DetailingBook />
            </div>);

        default : 
        return (
            <div>
                <h1>Your books are not available</h1>
            </div>);
        }
    }


    showBookList (term) {
        console.log(term, "...change")

        this.setState({term : term})
    }

    // AllBooks />
    // <DetailingBook />

    render () {

        return (
        <div>
            <div>
                <SearchBar onSearch = { term => this.showBookList( term ) }/>
            </div>
            <div>
                { this.programming() }
            </div>
        </div>
        )

    }

}

export default App;
