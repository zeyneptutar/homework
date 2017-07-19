import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import { loginRequest } from '../../actions/login';
import Header from '../../components/Header';
import Label from '../../components/Label';
import Input from '../../components/Input';
import { createDemoUser } from '../../utils/user';
import './style.css';

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    createDemoUser();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    this.props.loginRequest(username, password);
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
          <div className="container" style={{marginTop: "100px"}}>
            <h2 className="form-header">User Information</h2>
            <form className="form-horizontal" onSubmit={this.onSubmit}>
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
                <Label labelText={"Password"}/>
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
                <div className="col-sm-offset-4 col-sm-10">
                  <Button type="submit" bsStyle="default">Login</Button>
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
  };
}

export default connect( mapStateToProps, {
  loginRequest
})(LoginPage);
