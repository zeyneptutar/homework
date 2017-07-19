import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { showUserRequest, updateUserRequest, clearUserState } from "../../actions/user";
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import UserForm from '../../components/UserForm';

class UpdateUserPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    this.props.showUserRequest(this.props.userName);
  }
  componentWillUnmount() {
    this.props.clearUserState();
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password, name, surname, roles } = this.state;
    this.props.updateUserRequest(this.props.userName, username, password, name, surname, roles);
  }

  onFieldChanged = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return(
      <div>
        <Header isloggedIn={this.props.login.success}/>
        <SideBar/>
        <div className="col-sm-9">
          <UserForm
            onSubmit={this.onSubmit}
            onFieldChanged={this.onFieldChanged}
            updateUser
            userName={this.props.userName}
            user={this.props.user.user}/>
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
  }
}

export default connect (mapStateToProps, {
  showUserRequest,
  updateUserRequest,
  clearUserState
})(UpdateUserPage);