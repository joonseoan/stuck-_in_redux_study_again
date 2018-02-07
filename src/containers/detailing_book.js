
import React, { Component } from 'react';

import { connect } from 'react-redux';

class DetailingBook extends Component {

    render () {

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
                {console.log(this.props.book.title)} 
                    { this.props.book.title }   
                    
                </div> 
                <div> Pages : 
                    { this.props.book.pages }    
                </div> 
                <div> Description : 
                    { this.props.book.desc }
                </div>
            </div>

        );
    }

}


const mapStateToProps = (state) => {
    
    return {

        book : state.selectedBook
    
    };
}

export default connect(mapStateToProps)(DetailingBook);

