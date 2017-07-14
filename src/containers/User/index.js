import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import Button from 'react-bootstrap/lib/Button';
import { getUsersFromLocalStorage, destroyUserRequest } from '../../actions/user';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

class User extends Component {
  componentWillMount() {
    this.props.getUsersFromLocalStorage();
  }

  handleDestroyUser(username) {
    this.props.destroyUserRequest(username);
  }

  render() {
    return (
       <div>
          <Header isLoggedIn={this.props.login.success}/>
          <SideBar />
          <div className="col-sm-9">
            <h2 className="sub-header">Users</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Username</th>
                    <th>Roles</th>
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
                      <td><Link className="btn btn-info btn-xs"  to={`/users/${user.username}`}>Show</Link>
                      </td> 
                      <td><Button bsStyle="warning" bsSize="xs">Edit</Button></td>
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
            <Link to="/users/new">Add New User</Link>
          </div>
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
  getUsersFromLocalStorage, destroyUserRequest,
})(User);