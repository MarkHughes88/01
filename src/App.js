import React from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Pages from './components/pages/pages';
import UserBox from './components/user-box/user-box';

import UserData from './data/users.json';

class App extends React.Component {
  constructor(props) {

		super(props);
		this.state = {
			slider: {
				sliderActive: false,
				sliderContent: null
			},
      userBox: {
        userBoxActive: false
      }
		}
	}

  setSliderState(sliderActive, sliderContent) {
    this.setState({
     sliderActive,
     sliderContent
    });
  }

  setUserBoxState() {
    this.setState({
      userBoxActive: !this.state.userBoxActive
    })
  }

  render() {
    return (
      <div className="App">
        <Menu
          sliderActive={ this.state.sliderActive }
          sliderContent={ this.state.sliderContent }
          sliderState={ (sliderActive, sliderContent) => this.setSliderState(sliderActive, sliderContent) }
          userBoxState={ () => this.setUserBoxState() }
        />
      <Pages sliderActive={ this.state.sliderActive } />
      <UserBox userBoxActive={ this.state.userBoxActive } />
      </div>
    );
  }
}

export default App;
