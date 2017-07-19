import React, { Component } from  'react';
import { connect } from 'react-redux';
import { showUserRequest, clearUserState } from '../../actions/user'; 
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

class ProfilePage extends Component {
  componentWillMount() {
    this.props.showUserRequest(this.props.userName);
  }

  componentWillUnmount() {
    this.props.clearUserState();
  };

  render() {
    const { user } = this.props.user;
    console.log('show user', user);
    return (
        <div>
          <Header isLoggedIn={this.props.login.success}/>
          <SideBar />
          <div className="col-sm-9">
            <h2>About User</h2>
            {user &&
              <div>
                <p><strong>Name:</strong> {user.name && user.name}</p>
                <p><strong>Surname:</strong> {user.surname && user.surname}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Roles:</strong> {user.roles}</p>
              </div>
            }
          </div>
        </div>
      )
  }
}

function mapStateToProps(state, { routeParams }) {
  return {
    login: state.login,
    userName: routeParams.username,
    user: state.user,
  };
}

export default connect(mapStateToProps,{
  showUserRequest,
  clearUserState
})(ProfilePage);

