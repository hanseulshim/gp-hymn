import { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    name: 'gp-hymn',
    data: '',
  };

  componentDidMount() {
    const request = new XMLHttpRequest();
    request.onload = () => {
      console.log('response', JSON.parse(request.response));
      this.setState({
        data: request.response,
      });
    };
    request.onerror = (err) => {
      console.log(`Error: ${err}`);
    };
    request.open('GET', 'http://localhost:8080/', true);
    request.send();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
        <p>Here is the data:</p>
        <div>{this.state.data}</div>
      </div>
    );
  }
}
