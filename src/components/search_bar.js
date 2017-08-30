import React, {Component} from 'react';


//component of searchBar

class SearchBar extends Component {
    constructor (props) {
        super (props);

        this.state = {term: ''};
    }

    //a method or a function of our class
    render () {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        ); 
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//export our component
export default SearchBar;