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
      },
      activeUser: {
        id: '0001',
        userName: 'Mark',
        role: 'Admin',
        email: 'mark@myemail.com'
      },
      users: UserData.Users
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
          userIds={ this.state.users.map(user => user.id) }
          userNames={ this.state.users.map(user => user.username) }
          userRoles={ this.state.users.map(user => user.role) }
          userEmails={ this.state.users.map(user => user.email) }
        />
        <Pages
          sliderActive={ this.state.sliderActive }
        />
        <UserBox
          userBoxActive={ this.state.userBoxActive }
          userBoxState={ () => this.setUserBoxState() }
          activeUserName={ this.state.activeUser.userName }
          activeUserRole={ this.state.activeUser.role }
          activeUserEmail={ this.state.activeUser.email }
        />
      </div>
    );
  }
}

export default App;
