import { Component } from 'react';
import '../styles/App.css';

export default class App extends Component {
  state = {
    name: 'gp-hymn',
    data: '',
    error: null,
  };

  componentDidMount() {
    const request = new XMLHttpRequest();
    request.onload = () => {
      this.setState({
        data: request.response,
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

  render() {
    const { name, data, error } = this.state;
    return (
      <div className="App">
        <h1>Welcome to {name}</h1>
        <p>Here is the data:</p>
        <div>{data}</div>
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}
