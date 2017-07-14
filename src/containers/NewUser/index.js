import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUserRequest } from '../../actions/user';
import Button from 'react-bootstrap/lib/Button';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Label from '../../components/Label';
import Input from '../../components/Input';

class NewUser extends Component {
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
            <h2 className="form-header">New User</h2>
            <form className="form-horizontal" onSubmit={this.onSubmit}>
              <div className="form-group">
                <Label labelText="Name"/>
                <div className="col-sm-4">
                  <Input
                    onChange={this.onFieldChanged}
                    placeholder="Name"
                    name="name"
                    type="text"
                    required="true"/>
                </div>
              </div>
              <div className="form-group">
                <Label labelText="Surname"/>
                <div className="col-sm-4">
                  <Input
                    onChange={this.onFieldChanged}
                    placeholder="Surname"
                    name="surname"
                    type="text"
                    required="true"/>
                </div>
              </div>
              <div className="form-group">
                <Label labelText="Username"/>
                <div className="col-sm-4">
                  <Input
                    onChange={this.onFieldChanged}
                    placeholder="Username"
                    name="username"
                    type="text"
                    required="true"/>
                </div>
              </div>
              <div className="form-group">
                <Label labelText="Password"/>
                <div className="col-sm-4">
                  <Input
                    onChange={this.onFieldChanged}
                    placeholder="Password"
                    name="password"
                    type="password"
                    required="true"/>
                </div>
              </div>
              <div className="form-group">
                <Label labelText="Roles"/>
                <div className="col-sm-4">
                  <select onChange={this.onFieldChanged} name="roles" defaultValue="Demo" selected>
                    <option value="Admin">Admin</option>
                    <option value="Demo">Demo</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-4 col-sm-10">
                  <Button type="submit" bsStyle="default">Create New User</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    user: state.user,
  };
}

export default connect( mapStateToProps, {
  createUserRequest
})(NewUser);
