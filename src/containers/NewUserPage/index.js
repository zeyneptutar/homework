import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUserRequest } from '../../actions/user';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import UserForm from '../../components/UserForm';

class NewUserPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password, name, surname, roles } = this.state;
    this.props.createUserRequest(username, password, name, surname, roles);
  }

  onFieldChanged = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Header isloggedIn={this.props.login.success}/>
        <SideBar/>
        <div className="col-sm-9">
          <UserForm
            onSubmit={this.onSubmit}
            onFieldChanged={this.onFieldChanged}
            newUser />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect( mapStateToProps, {
  createUserRequest
})(NewUserPage);
