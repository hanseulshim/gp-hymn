import React, { Component } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import '../styles/App.css';
import data from '../utils/data';

export default class App extends Component {
  state = {
    data: [],
    error: null,
    searchString: '',
  };

  componentDidMount() {
    // const request = new XMLHttpRequest();
    // request.onload = () => {
    //   const response = JSON.parse(request.response);
    //   this.setState({
    //     data: response,
    //   });
    // };
    // request.onerror = (err) => {
    //   this.setState({
    //     error: 'Failed to get data'
    //   });
    // };
    // request.open('GET', 'https://gp-hymn-server.herokuapp.com/', true);
    // request.send();
    this.setState({ data: data });
  }

  setSearchString = (searchString) => {
    this.setState({ searchString });
  }

  render() {
    const {
      data, error, searchString,
    } = this.state;
    const hymnList = data
    .filter(v => v.name.toLowerCase().includes(searchString.toLowerCase()));
    return (
      <div className="App">
        <Header setSearchString={this.setSearchString} />
        <MainContainer hymnList={hymnList} />
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}
