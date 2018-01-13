import { Component } from 'react';
import Header from './components/Header';
import HymnView from './components/HymnView';
import '../styles/App.scss';

export default class App extends Component {
  state = {
    name: 'gp-hymn',
    data: [],
    error: null,
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

  createList = (hymn, i) => <li key={i}>{hymn.name}</li>

  render() {
    const { name, data, error } = this.state;
    const hymnList = data.map(this.createList);
    return (
      <div className="App">
        <Header />
        <h1>Welcome to {name}</h1>
        <h2>Hymn List</h2>
        <ul>{hymnList}</ul>
        <HymnView name={name} />
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}
