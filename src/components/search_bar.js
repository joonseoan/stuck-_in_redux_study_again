import React, {Component} from 'react';

export default class SearchBar extends Component {


    constructor (props) {

        super(props);

    }

    render () {

        return (

            <div>
                Book Search: 
                <input

                    onChange = { event => this.onInputChange(event.target.value) }
                />

            </div>
        );
    }

    onInputChange(term) {

       
        this.props.onSearch(term);

    }

}

// value = { this.state.term }
// this.setState({ term });

// this.state = { term: '' }