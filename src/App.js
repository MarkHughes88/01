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
        name: 'Mark',
        userName: 'MarkHughes88',
        role: 'Admin',
        email: 'mark@myemail.com'
      },
      SelectedUser: {
        id: undefined,
        name: undefined,
        userName: undefined,
        role: undefined,
        email: undefined
      },
      users: UserData.Users
		}
    this.selectUser = this.selectUser.bind(this);
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

  selectUser(id) {
    this.setState({
      SelectedUser: {
        id: id
      }
    })
    console.log(this.state.SelectedUser.id)
  }

  render() {
    return (
      <div className="App">
        <Menu
          sliderActive={ this.state.sliderActive }
          sliderContent={ this.state.sliderContent }
          sliderState={ (sliderActive, sliderContent) => this.setSliderState(sliderActive, sliderContent) }
          userBoxState={ () => this.setUserBoxState() }
          users={ this.state.users }
          selectUser={ (id) => this.selectUser(id) }
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
