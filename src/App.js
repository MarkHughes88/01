import React from 'react';
import './App.css';
import Menu from './components/menu/menu'
import Pages from './components/pages/pages'

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			slider: {
				active: false,
				content: null
			}
		}
	}

  setSliderState(active, content) {
    this.setState({
     active,
     content
    });
  }

  render() {
    return (
      <div className="App">
        <Menu
          sliderActive={ this.state.active }
          sliderContent={ this.state.content }
          sliderState={ (active, content) => this.setSliderState(active, content) }
          toggleSlider={ (text) => this.toggleSlider(text) }
        />
      <Pages sliderActive={ this.state.active } />
      </div>
    );
  }
}

export default App;
