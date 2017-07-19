import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import Button from 'react-bootstrap/lib/Button';
import { getUsersFromLocalStorage, destroyUserRequest } from '../../actions/user';
import { searchRequest } from '../../actions/search';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import './style.css';
const MediaQuery = require('react-responsive');

class UsersPage extends Component {
  componentWillMount() {
    this.props.getUsersFromLocalStorage();
  }

  handleDestroyUser(username) {
    this.props.destroyUserRequest(username);
  }

  handleSearchUser = (query) => {
    this.props.searchRequest(query);
  }

  render() {
    return (
       <div>
        <Header
          isLoggedIn={this.props.login.success}
          pathName={this.props.location.pathname}
          searchUser={this.handleSearchUser}/>
        <SideBar />
        <MediaQuery minWidth  ={720}>
          <div className="col-sm-9">
            <h2 className="sub-header">Users</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name <span className="caret up"></span></th>
                    <th>Surname <span className="caret up"></span></th>
                    <th>Username <span className="caret up"></span></th>
                    <th>Roles <span className="caret up"></span></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {_.values(this.props.user.data).map((user,index) => {
                  return(
                    <tr id={index}>
                      <td>{user.name}</td>
                      <td>{user.surname}</td>
                      <td>{user.username}</td>
                      <td>{user.roles}</td>
                      <td><Link className="btn btn-info btn-xs"  to={`/users/${user.username}`}>Show</Link></td>
                      <td><Link className="btn btn-warning btn-xs" to={`/users/${user.username}/update`}>Edit</Link></td>
                      <td><Button bsStyle="danger" bsSize="xs"
                          onClick={() => this.handleDestroyUser(user.username)}>
                          Destroy
                        </Button>
                      </td>
                    </tr>
                  )
                  })
                }
                </tbody>
              </table>
            </div>
            <p><Link to="/users/new">Add New User</Link></p>
          </div>
          </MediaQuery>
          <MediaQuery maxWidth={721}>
            <div>
              <h2 className="sub-header" style={{marginLeft: "18px"}}>Users</h2>
              {_.values(this.props.user.data).map((user,index) => {
                  return(
                    <div id={index} className="card">
                      <p><strong>Name:</strong> {user.name}</p>
                      <p><strong>Surname:</strong> {user.surname}</p>
                      <p><strong>Username:</strong> {user.username}</p>
                      <p><strong>Roles:</strong> {user.roles}</p>
                      <div>
                        <span><Link className="btn btn-info btn-xs"  to={`/users/${user.username}`}>Show</Link></span>
                        <span><Link className="btn btn-warning btn-xs" to={`/users/${user.username}/update`}>Edit</Link></span>
                        <span><Button bsStyle="danger" bsSize="xs"
                            onClick={() => this.handleDestroyUser(user.username)}>
                            Destroy
                          </Button>
                        </span>
                      </div>
                    </div>
                  )
                  })
                }
                <p style={{marginLeft: "18px"}}><Link to="/users/new">Add New User</Link></p>
            </div>
          </MediaQuery>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    user: state.user,
  };
}

export default connect(mapStateToProps,{
  getUsersFromLocalStorage,
  destroyUserRequest,
  searchRequest
})(UsersPage);