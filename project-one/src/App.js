import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return React.createElement('div', {
    //   className: 'App'
    // }, React.createElement('h1', null, "hello react"))
    return (
      <div className="App">
        <h2>Hello React</h2>
      </div>
    );
  }
}

export default App;