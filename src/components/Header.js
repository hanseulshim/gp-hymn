import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const style = {
  width: '100%',
  background: '#c0dfd9',
  padding: '20px 50px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #3b3a36'
};

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
      <div style={style}>
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
