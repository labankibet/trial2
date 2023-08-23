import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search by description"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
