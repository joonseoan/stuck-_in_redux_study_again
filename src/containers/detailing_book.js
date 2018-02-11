
import React, { Component } from 'react';

import { connect } from 'react-redux';


class DetailingBook extends Component {

    render () {

        const url = `images/${this.props.imageBook}`;

        if (!this.props.book)
        return (      
            <div>
                <h3> "Please Select a Book" </h3>
            </div>
        );

        return (
            <div>
                <h3>Details for: </h3>
                <div> Book Title : 
                {console.log(this, "in HTML? THIS .........")}
                    { this.props.book.title }   
                    
                </div> 
                <div> Pages : 
                    { this.props.book.pages }    
                </div> 
                <div> Description : 
                    { this.props.book.desc }
                </div>
                <div> level : 
                    { this.props.book.level }
                </div>
                <div> Author : 
                    { this.props.book.auth }
                </div>
                <div> Book Cover : 
                    <img src = {url} alt ="javaScript" /> 
                </div>

            </div>

        );
    }

} 

const mapStateToProps = (state) => {
   // console.log(this, " what about this?");
   
   return {
        
        book : state.selectedBook,
        imageBook : state.imageBook
    
    };
}

/*

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators( { allImage : allImage }, dispatch)
       // bookItem : (book) => {dispatch(actions.allBook(book))}

};

// return bindActionCreators( { allImage : allImage }, dispatch)
// bookItem : (book) => {dispatch(actions.allBook(book))}

*/

export default connect(mapStateToProps)(DetailingBook);

