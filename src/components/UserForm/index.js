import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Label from '../../components/Label';
import Input from '../../components/Input';

class UserForm extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('Demo',this.props.user);
    return (
      <div>
        <h2 className="form-header">{this.props.newUser ? "New User" : "Update User"}</h2>
        <form className="form-horizontal" onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <Label labelText="Name"/>
            <div className="col-sm-4">
              <Input
                onChange={this.props.onFieldChanged}
                placeholder="Name"
                defaultValue={this.props.updateUser && this.props.user.name && this.props.user.name}
                name="name"
                type="text"
                required="true"/>
            </div>
          </div>
          <div className="form-group">
            <Label labelText="Surname"/>
            <div className="col-sm-4">
              <Input
                onChange={this.props.onFieldChanged}
                placeholder="Surname"
                name="surname"
                defaultValue={this.props.updateUser && this.props.user.surname}
                type="text"
                required="true"/>
            </div>
          </div>
          <div className="form-group">
            <Label labelText="Username"/>
            <div className="col-sm-4">
              <Input
                onChange={this.props.onFieldChanged}
                placeholder="Username"
                name="username"
                defaultValue={this.props.updateUser && this.props.user.username}
                type="text"
                required="true"/>
            </div>
          </div>
          <div className="form-group">
            <Label labelText="Password"/>
            <div className="col-sm-4">
              <Input
                onChange={this.props.onFieldChanged}
                placeholder="Password"
                name="password"
                defaultValue={this.props.updateUser && this.props.user.surname}
                type="password"
                required="true"/>
            </div>
          </div>
          <div className="form-group">
            <Label labelText="Roles"/>
            <div className="col-sm-4">
              <select onChange={this.props.onFieldChanged} name="roles">
                <option value=""></option>
                <option value="Admin">Admin</option>
                <option value="Demo">Demo</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-10">
              <Button type="submit" bsStyle="default">
                {this.props.newUser ? "Create New User" : "Update User"}
              </Button>
            </div>
          </div>
        </form>
        </div>
      )
  }
}

export default UserForm;
