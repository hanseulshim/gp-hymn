import { Component } from 'react';
import Header from './components/Header';
import HymnView from './components/HymnView';
import '../styles/App.scss';

export default class App extends Component {
  state = {
    data: [],
    error: null,
    name: 'test',
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

  createList = (hymn, i) => <li key={i}>{hymn.name}</li>;

  render() {
    const {
      name, data, error, searchString,
    } = this.state;
    const hymnList = data
      .filter(v => v.name.toLowerCase().includes(searchString.toLowerCase()))
      .map(this.createList);
    return (
      <div className="App">
        <Header setSearchString={this.setSearchString} />
        <h2>Hymn List</h2>
        <ul>{hymnList}</ul>
        <HymnView name={name} />
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}
