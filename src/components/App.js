import React, { Component } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import '../styles/App.css';

export default class App extends Component {
  state = {
    data: [],
    error: null,
    searchString: '',
  };

  componentDidMount() {
    const request = new XMLHttpRequest();
    request.onload = () => {
      const response = JSON.parse(request.response);
      this.setState({
        data: response,
      });
    };
    request.onerror = (err) => {
      this.setState({
        error: err,
      });
    };
    request.open('GET', 'http://localhost:8080/', true);
    request.send();
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
