import React, { Component } from 'react';

import { connect } from 'react-redux';

import { allBook } from '../actions';

import { bindActionCreators } from 'redux';

// import * as actions from '../actions';

class AllBooks extends Component {

    BookList () {
        console.log(this, "what is this in the firstline?");
       // console.log(this.props.books)
        // Wrong : return (this.props.Books.map((book) => {});
        
        return (this.props.books.map((book) => {
            console.log(this, "what is this?")

            return (

                <li

                    key = { book.title }
                    onClick = { () =>  this.props.allBook(book, this.props.imageBook) }
                    className = 'list-group-item'>
                    { book.title }
                
                </li>

            );
        
        }));
        
    }

    render () {

        console.log(this + "here ? this what?");
        return (

            <ul>

                { this.BookList() }
            
            </ul>

        );

    }

}

const mapStateToProps = (state) => {
        
    return ({
    
        books: state.books.textData,
        imageBook: state.books.imageBooks
    
    });
};


const mapDispatchToProps = (dispatch) => {

    return bindActionCreators( { allBook : allBook }, dispatch)
       // bookItem : (book) => {dispatch(actions.allBook(book))}

};

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);
