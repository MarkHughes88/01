import React from 'react';
import './App.css';
import Menu from './components/menu/menu'
import Pages from './components/pages/pages'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Pages />
      </div>
    );
  }
}

export default App;
