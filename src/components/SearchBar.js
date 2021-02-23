import React, {useState, useEffect} from 'react';

class SearchBar extends React.Component {
    state = {term: ""};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
        console.log("in onFormSubmit, this is term state: " +this.state.term);
    }  
    

    //useEffect = (() => {
    //    console.log(this.state.term)
    //}, [this.state.term]);


        render () {
            return(
                <div>
                    <div className = "search-bar ui segment">
                        <form onSubmit = {this.onFormSubmit} className = "ui form">
                            <label>Search for a video</label>
                            <input
                                type = "text"
                                placeholder="Search Videos..."
                                value = {this.state.term}
                                onChange = {(e) => this.setState({term: e.target.value})}
                                />
                        </form>
                    </div>
                </div>
            );
        }
}

export default SearchBar;