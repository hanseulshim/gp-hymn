import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.props.setSearchString(event.target.value);
  }

  render() {
    return (
      <div className="header-container">
        <h1>Welcome to GP Hymn!</h1>
        <TextField
          className="search-bar"
          id="search"
          label="Search for a hymn"
          type="search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Header.propTypes = {
  setSearchString: PropTypes.func.isRequired,
};
