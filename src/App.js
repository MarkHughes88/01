import React from 'react';
import './App.css';
import Login from './components/login/login';
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
          sliderContent: undefined
        },
        userBox: {
          userBoxActive: false
        },
        currentPage: 'home',
        login: {
          isLoggedIn: false,
          username: undefined,
          password: undefined
        },
        activeUser: {
          id: undefined,
          image: undefined,
        },
        selectedUser: {
          id: undefined
        },
        users: UserData.Users || {} // <-- fallback incase users dont load
      }
	}

  componentWillMount() {
    this.setActiveUser();
  }

  componentWillUpdate(nextProps, nextState) {
  }

 componentDidUpdate(prevProps, prevState) {
    // End console group for this render()
    console.groupEnd();
  }

  setSliderState(sliderActive, sliderContent) {
    if(sliderContent === 'Home' || sliderContent === 'Help') {
      return;
    } else {
      this.setState({
       sliderActive,
       sliderContent
      });
    }
  }

  closeSlider() {
    this.setState({
      sliderActive: false
    })
  }

  setUserBoxState() {
    this.setState({
      userBoxActive: !this.state.userBoxActive
    })
  }

  userBoxEditUser(activeUser) {
    this.setState({
      selectedUser: {
        id: activeUser
      }
    })
  }

  selectUser(selectedUserid) {
    this.setState({
      selectedUser: {
        id: selectedUserid
      }
    });
  }

  setActiveUser() {
    this.setState({
      activeUser: {
        id: this.state.users[0].id,
        image: this.state.users[0].image
      }
    })
  }

  changePage(page) {
    this.setState({
      currentPage: page,
      userBoxActive: false,
      sliderActive: false
    });
  }

  login(username, password) {
    let inputName = username;
    let inputPassword = password;
    let users = this.state.users.map(user => ({
        id: user.id,
        username: user.username,
        password: user.password,
        image: user.image
    }));

    for(var i = 0; i < users.length; i++) {
      if(inputName === users[i].username) {
        if(inputPassword === users[i].password) {
          this.setState({
            login: {
              isLoggedIn: true
            },
            activeUser: {
              id: users[i].id,
              image: users[i].image
            }
          })
          break;
        } else {
          console.log('failed on password');
        }
        break;
      } else {
        console.log('failed on username');
      }
    }
  }

  logout() {
    this.setState({
      login: {
        isLoggedIn: false
      }
    })
    console.log('logout')
  }

  render() {
    const isLoggedIn = this.state.login.isLoggedIn;

    return (
      <div className="App">
        { !isLoggedIn ?
          <Login
            isLoggedIn={ (username, password) => this.login(username, password) }
            username={ this.login.username }
            password={ this.login.password }
          />
          :
          <div>
            <Menu
              sliderActive={ this.state.sliderActive }
              closeSlider={ () => this.closeSlider() }
              sliderContent={ this.state.sliderContent }
              sliderState={ (sliderActive, sliderContent) => this.setSliderState(sliderActive, sliderContent) }
              changePage={ (page) => this.changePage(page) }
              pageState={ this.state.currentPage }
              userBoxState={ () => this.setUserBoxState() }
              users={ this.state.users }
              activeUser={ this.state.activeUser.id }
              activeUserImage={ this.state.activeUser.image }
              selectedUser={ (selectedUserid) => this.selectUser(selectedUserid) }
            />
            <Pages
              sliderActive={ this.state.sliderActive }
              changePage={ (page) => this.changePage(page) }
              pageState={ this.state.currentPage }
              selectedUser={ this.state.selectedUser.id }
              activeUser={ this.state.activeUser.id }
              users={ this.state.users }
            />
            <UserBox
              userBoxActive={ this.state.userBoxActive }
              userBoxState={ () => this.setUserBoxState() }
              users={ this.state.users }
              activeUser={ this.state.activeUser.id }
              activeUserImage={ this.state.activeUser.image }
              editUser={ (activeUser) => { this.userBoxEditUser(activeUser) } }
              changePage={ (page) => this.changePage(page) }
              logout={ () => this.logout() }
            />
            <div className='container-fluid pages__header pages__header--fallback'></div>
          </div>
         }
      </div>
    );
  }
}

export default App;
