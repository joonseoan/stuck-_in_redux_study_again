import React, { Component } from 'react';

import { connect } from 'react-redux';

import { allBook } from '../actions';

import { bindActionCreators } from 'redux';

// import * as actions from '../actions';

class AllBooks extends Component {

    constructor (props) {

        super(props);
        this.BookList = this.BookList.bind(this);
    
    };

    BookList () {

       // console.log(this.props.books)
        // Wrong : return (this.props.Books.map((book) => {});
        return (this.props.books.map((book) => {

            

            return (

                <li 

                    key = { book.title }
                    onClick = { () =>  this.props.allBook(book) }
                    className = 'list-group-item'>
                    { book.title }
                
                </li>

            );
        
        }));
        
    }

    render () {


        return (

            <ul>

                { this.BookList() }
            
            </ul>

        );

    }

}

const mapStateToProps = (state) => {
        
    return ({
    
        books: state.books
    
    });
};


const mapDispatchToProps = (dispatch) => {

    
    return bindActionCreators( { allBook : allBook }, dispatch)
       // bookItem : (book) => {dispatch(actions.allBook(book))}

};

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);
