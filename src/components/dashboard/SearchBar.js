import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return(
            <div className="row">
                <div className="col s12">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">search</i>
                        <input type="text" id="searchBar" name="searchBar" 
                        className="autocomplete" 
                        onChange={ e => this.props.handleSearchChange(e) }
                        onKeyPress={ e => this.props.handleKeyPressSearch(e) }
                        value={ this.props.query }
                        autoComplete="off" />
                        <label htmlFor="searchBar">Enter Item Code</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;