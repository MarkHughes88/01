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
      currentPage: 'home',
      activeUser: {
        id: '0001',
        name: 'Mark',
        userName: 'MarkHughes88',
        role: 'Admin',
        email: 'mark@myemail.com'
      },
      selectedUser: {
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

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState.selectedUser.id)
  }

  componentDidUpdate(newProps, newState) {
    if(this.state.currentPage !== newState.currentPage) {
      console.log('Page has changed!', newState.currentPage)
    }
    if(this.state.selectedUser !== newState.selectedUser) {
      console.log('User has changed!', newState.selectedUser.id)
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

  selectUser(selectedUserid) {
    this.setState({
      selectedUser: {
        id: selectedUserid
      }
    });
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <div className="App">
        <Menu
          sliderActive={ this.state.sliderActive }
          sliderContent={ this.state.sliderContent }
          sliderState={ (sliderActive, sliderContent) => this.setSliderState(sliderActive, sliderContent) }
          changePage={ (page) => this.changePage(page) }
          userBoxState={ () => this.setUserBoxState() }
          users={ this.state.users }
          selectUser={ (selectedUserid) => this.selectUser(selectedUserid) }
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
