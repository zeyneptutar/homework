import React, { Component } from  'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

class MainPage extends Component {
  render() {
    return (
        <div>
          <Header isLoggedIn={this.props.login.success}/>
          <SideBar />
          <h2>Homepage</h2>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps)(MainPage);

