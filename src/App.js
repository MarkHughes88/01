import React from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Pages from './components/pages/pages';
import UserBox from './components/user-box/user-box';

import UserData from './data/users.json';

class App extends React.Component {
  constructor(props) {
      super(props);

      // Start console group for this render()
      console.group('App.js');

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
          users: UserData.Users || {} // <!-- Worth having this as a fallback, in case it doesn't load the data for some reason. Should it be object {} or array []?
      }

      this.selectUser = this.selectUser.bind(this);
	}

  componentWillUpdate(nextProps, nextState) {
    if(nextState.selectedUser !== this.state.selectedUser) {
      console.log('componentWillUpdate', 'Updating User to ' + nextState.selectedUser.id)
    }
  }

 componentDidUpdate(prevProps, prevState) {
    if(this.state.selectedUser !== prevState.selectedUser) {
      console.log('componentDidUpdate', 'User has updated to ' + this.state.selectedUser.id + ' from ' + prevState.selectedUser.id);
    }

    // End console group for this render()
    console.groupEnd();
  }

  setSliderState(sliderActive, sliderContent) {
    if(sliderContent === 'Home' || sliderContent === 'Help') {
      this.setState({
        sliderActive: false
      })
    } else {
      this.setState({
       sliderActive,
       sliderContent
      });
    }
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
          changePage={ (page) => this.changePage(page) }
          pageState={ this.state.currentPage }
          selectedUser={ this.state.selectedUser }
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
