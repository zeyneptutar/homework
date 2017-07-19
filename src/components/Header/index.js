import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }
  onFieldChanged = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div>
            <div className="navbar-header">
              <a className="navbar-brand" href="http://sinerjisoft.com.tr/tr/index.html"
                without rel="noopener noreferrer" target="_blank">
                Sinerjisoft Homework
              </a>
            </div>
            <div className="pull-right">
            {this.props.pathName && this.props.pathName === "/users" &&
              <form className="navbar-form" role="search">
                <div className="input-group">
                    <input type="text" className="form-control"
                      placeholder="Search" name="query"
                      onChange={this.onFieldChanged}/>
                    <div className="input-group-btn">
                        <Button bsStyle="default"
                          onClick={() => this.props.searchUser(this.state.query)}>
                          <i className="glyphicon glyphicon-search"></i>
                        </Button>
                    </div>
                </div>
              </form>
            }
            </div>
          </div>
        </nav>
      </div>
      )
  }
}

Header.propTypes = {
  pathName: PropTypes.string,
  searchUser: PropTypes.func,
};

export default Header;
